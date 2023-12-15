import fs from 'fs'

const FILE_PATH = './day_3/part_1/engine_schematic.txt'

const NUMBERS_REGEX = /[0-9]+/
const NUMBERS_PERIOD_REGEX = /[0-9.]+/

try {
  /* Read values from files */
  fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      console.log(`Error reading file: ${err}`)
      return
    }

    /*
     * Split values into array by \r\n
     */
    const array = data.split('\r\n').map((value) => value.split(''))

    const partNumberIndexes: Record<number, number[]> = {}

    /* Row */
    for (let i = 0; i < array.length; i++) {
      /* Column */
      for (let x = 0; x < array[i].length; x++) {
        const value = array[i][x]

        if (!NUMBERS_REGEX.test(value)) {
          continue
        }

        const rightNeighbour = array[i][x + 1]
        const leftNeightbour = array[i][x - 1]

        const topNeighbour = array[i - 1] ? array[i - 1][x] : undefined
        const bottomNeighbour = array[i + 1] ? array[i + 1][x] : undefined

        const topRightNeighbour = array[i - 1] ? array[i - 1][x + 1] : undefined
        const topLeftNeighbour = array[i - 1] ? array[i - 1][x - 1] : undefined

        const bottomRightNeighbour = array[i + 1]
          ? array[i + 1][x + 1]
          : undefined
        const bottomLeftNeighbour = array[i + 1]
          ? array[i + 1][x - 1]
          : undefined

        const isPartNumber =
          (rightNeighbour && !NUMBERS_PERIOD_REGEX.test(rightNeighbour)) ||
          (leftNeightbour && !NUMBERS_PERIOD_REGEX.test(leftNeightbour)) ||
          (topNeighbour && !NUMBERS_PERIOD_REGEX.test(topNeighbour)) ||
          (bottomNeighbour && !NUMBERS_PERIOD_REGEX.test(bottomNeighbour)) ||
          (topRightNeighbour &&
            !NUMBERS_PERIOD_REGEX.test(topRightNeighbour)) ||
          (topLeftNeighbour && !NUMBERS_PERIOD_REGEX.test(topLeftNeighbour)) ||
          (bottomRightNeighbour &&
            !NUMBERS_PERIOD_REGEX.test(bottomRightNeighbour)) ||
          (bottomLeftNeighbour &&
            !NUMBERS_PERIOD_REGEX.test(bottomLeftNeighbour))

        if (isPartNumber) {
          if (
            partNumberIndexes[i] &&
            partNumberIndexes[i].find((index) => index === x) === undefined
          ) {
            partNumberIndexes[i].push(x)
          } else if (partNumberIndexes[i] === undefined) {
            partNumberIndexes[i] = [x]
          }

          /*
           * Keep adding numbers to the left of the part number to also be part numbers
           * until a non-numerical character is hit
           */
          let currentPositionGoingLeft = x - 1
          while (NUMBERS_REGEX.test(array[i][currentPositionGoingLeft])) {
            if (
              partNumberIndexes[i] &&
              partNumberIndexes[i].find(
                (index) => index === currentPositionGoingLeft,
              ) === undefined
            ) {
              partNumberIndexes[i].push(currentPositionGoingLeft)
            }

            currentPositionGoingLeft = currentPositionGoingLeft - 1
          }

          /*
           * Keep adding numbers to the right of the part number to also be part numbers
           * until a non-numerical character is hit
           */
          let currentPositionGoingRight = x + 1
          while (NUMBERS_REGEX.test(array[i][currentPositionGoingRight])) {
            if (
              partNumberIndexes[i] &&
              partNumberIndexes[i].find(
                (index) => index === currentPositionGoingRight,
              ) === undefined
            ) {
              partNumberIndexes[i].push(currentPositionGoingRight)
            }

            currentPositionGoingRight = currentPositionGoingRight + 1
          }

          partNumberIndexes[i] = partNumberIndexes[i].sort((a, b) => a - b)
        }
      }
    }

    /* Map partNumberIndexes to part numbers */
    const partNumberIndexKeys = Object.keys(partNumberIndexes)
    const partNumbers: number[] = []

    for (let x = 0; x < partNumberIndexKeys.length; x++) {
      const key = parseInt(partNumberIndexKeys[x])

      let fullPartNumber = ''
      for (let y = 0; y < partNumberIndexes[key].length; y++) {
        const indexValue = partNumberIndexes[key][y]
        const prevIndexValue = partNumberIndexes[key][y - 1]

        if (y === 0) {
          fullPartNumber = fullPartNumber + array[x][indexValue].toString()
        } else if (prevIndexValue && prevIndexValue - indexValue === -1) {
          fullPartNumber = fullPartNumber + array[x][indexValue].toString()

          if (y + 1 === partNumberIndexes[key].length) {
            partNumbers.push(parseInt(fullPartNumber))
            fullPartNumber = array[x][indexValue].toString()
          }
        } else {
          partNumbers.push(parseInt(fullPartNumber))
          fullPartNumber = array[x][indexValue].toString()
        }
      }
    }

    console.log(partNumbers.reduce((sum, num) => sum + num, 0))
  })
} catch (err) {
  console.log(
    `Error processing file data. Check to see if your file is formatted correctly:\n ${err}`,
  )
}
