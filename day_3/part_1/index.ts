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

    const partNumbers: Record<number, number[]> = {}

    for (let i = 0; i < array.length; i++) {
      for (let x = 0; x < array[i].length; x++) {
        const value = array[i][x]

        if (!NUMBERS_REGEX.test(value)) {
          continue
        }

        const rightNeighbour = array[i][x + 1]
        const leftNeightbour = array[i][x - 1]

        if (
          (rightNeighbour && !NUMBERS_PERIOD_REGEX.test(rightNeighbour)) ||
          (leftNeightbour && !NUMBERS_PERIOD_REGEX.test(leftNeightbour))
        ) {
          partNumbers[i] &&
          partNumbers[i].find((index) => index === x) === undefined
            ? partNumbers[i].push(x)
            : (partNumbers[i] = [x])
        }

        const topNeighbour = array[i - 1] ? array[i - 1][x] : undefined
        const bottomNeighbour = array[i + 1] ? array[i + 1][x] : undefined

        if (
          (topNeighbour && !NUMBERS_PERIOD_REGEX.test(topNeighbour)) ||
          (bottomNeighbour && !NUMBERS_PERIOD_REGEX.test(bottomNeighbour))
        ) {
          partNumbers[i] &&
          partNumbers[i].find((index) => index === x) === undefined
            ? partNumbers[i].push(x)
            : (partNumbers[i] = [x])
        }

        const topRightNeighbour = array[i - 1] ? array[i - 1][x + 1] : undefined
        const topLeftNeighbour = array[i - 1] ? array[i - 1][x - 1] : undefined

        if (
          (topRightNeighbour &&
            !NUMBERS_PERIOD_REGEX.test(topRightNeighbour)) ||
          (topLeftNeighbour && !NUMBERS_PERIOD_REGEX.test(topLeftNeighbour))
        ) {
          partNumbers[i] &&
          partNumbers[i].find((index) => index === x) === undefined
            ? partNumbers[i].push(x)
            : (partNumbers[i] = [x])
        }

        const bottomRightNeighbour = array[i + 1]
          ? array[i + 1][x + 1]
          : undefined
        const bottomLeftNeighbour = array[i + 1]
          ? array[i + 1][x - 1]
          : undefined

        if (
          (bottomRightNeighbour &&
            !NUMBERS_PERIOD_REGEX.test(bottomRightNeighbour)) ||
          (bottomLeftNeighbour &&
            !NUMBERS_PERIOD_REGEX.test(bottomLeftNeighbour))
        ) {
          partNumbers[i] &&
          partNumbers[i].find((index) => index === x) === undefined
            ? partNumbers[i].push(x)
            : (partNumbers[i] = [x])
        }

        // let currentPositionGoingLeft = x - 1
        // while (NUMBERS_REGEX.test(array[i][currentPositionGoingLeft])) {
        //   partNumbers[i] &&
        //   partNumbers[i].find((index) => index === currentPositionGoingLeft) ===
        //     undefined
        //     ? partNumbers[i].push(currentPositionGoingLeft)
        //     : (partNumbers[i] = [currentPositionGoingLeft])

        //   currentPositionGoingLeft = currentPositionGoingLeft - 1
        // }

        // let currentPositionGoingRight = x + 1
        // while (NUMBERS_REGEX.test(array[i][currentPositionGoingRight])) {
        //   partNumbers[i] &&
        //   partNumbers[i].find((index) => index === currentPositionGoingLeft) ===
        //     undefined
        //     ? partNumbers[i].push(currentPositionGoingLeft)
        //     : (partNumbers[i] = [currentPositionGoingLeft])

        //   currentPositionGoingRight = currentPositionGoingRight + 1
        // }
      }
    }

    console.log(partNumbers)
  })
} catch (err) {
  console.log(
    `Error processing file data. Check to see if your file is formatted correctly:\n ${err}`,
  )
}
