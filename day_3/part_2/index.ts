import fs from 'fs'
import {
  getBottomLeftNeighbour,
  getBottomNeighbour,
  getBottomRightNeighbour,
  getLeftNeighbour,
  getRightNeighbour,
  getTopLeftNeighbour,
  getTopNeighbour,
  getTopRightNeighbour,
} from './utils'

const FILE_PATH = './day_3/part_1/engine_schematic.txt'

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

    const partNumberIndexes: Record<number, string[]> = {}

    let gearRatioSum = 0

    /* Row */
    for (let i = 0; i < array.length; i++) {
      /* Column */
      for (let x = 0; x < array[i].length; x++) {
        const value = array[i][x]
        let neighbourCount = 0
        if (!/\*/.test(value)) {
          continue
        }

        const rightNeighbourNumber = getRightNeighbour(array, {
          row: i,
          col: x,
        })

        if (rightNeighbourNumber.length > 0) {
          neighbourCount = neighbourCount + 1
          if (neighbourCount > 2) {
            continue
          }

          if (partNumberIndexes[i]) {
            partNumberIndexes[i].push(rightNeighbourNumber)
          } else {
            partNumberIndexes[i] = [rightNeighbourNumber]
          }
        }

        const leftNeighbourNumber = getLeftNeighbour(array, {
          row: i,
          col: x,
        })

        if (leftNeighbourNumber.length > 0) {
          neighbourCount = neighbourCount + 1
          if (neighbourCount > 2) {
            continue
          }

          if (partNumberIndexes[i]) {
            partNumberIndexes[i].push(leftNeighbourNumber)
          } else {
            partNumberIndexes[i] = [leftNeighbourNumber]
          }
        }

        const topNeighbourNumber = getTopNeighbour(array, {
          row: i,
          col: x,
        })

        if (topNeighbourNumber.length > 0) {
          neighbourCount = neighbourCount + 1
          if (neighbourCount > 2) {
            continue
          }

          if (partNumberIndexes[i]) {
            partNumberIndexes[i].push(topNeighbourNumber)
          } else {
            partNumberIndexes[i] = [topNeighbourNumber]
          }
        }

        const bottomNeighbourNumber = getBottomNeighbour(array, {
          row: i,
          col: x,
        })

        if (bottomNeighbourNumber.length > 0) {
          neighbourCount = neighbourCount + 1
          if (neighbourCount > 2) {
            continue
          }

          if (partNumberIndexes[i]) {
            partNumberIndexes[i].push(bottomNeighbourNumber)
          } else {
            partNumberIndexes[i] = [bottomNeighbourNumber]
          }
        }

        const topLeftNeighbourNumber = getTopLeftNeighbour(array, {
          row: i,
          col: x,
        })

        if (topLeftNeighbourNumber.length > 0) {
          neighbourCount = neighbourCount + 1
          if (neighbourCount > 2) {
            continue
          }

          if (partNumberIndexes[i]) {
            partNumberIndexes[i].push(topLeftNeighbourNumber)
          } else {
            partNumberIndexes[i] = [topLeftNeighbourNumber]
          }
        }

        const topRightNeighbourNumber = getTopRightNeighbour(array, {
          row: i,
          col: x,
        })

        if (topRightNeighbourNumber.length > 0) {
          neighbourCount = neighbourCount + 1
          if (neighbourCount > 2) {
            continue
          }

          if (partNumberIndexes[i]) {
            partNumberIndexes[i].push(topRightNeighbourNumber)
          } else {
            partNumberIndexes[i] = [topRightNeighbourNumber]
          }
        }

        const bottomLeftNeighbourNumber = getBottomLeftNeighbour(array, {
          row: i,
          col: x,
        })

        if (bottomLeftNeighbourNumber.length > 0) {
          neighbourCount = neighbourCount + 1
          if (neighbourCount > 2) {
            continue
          }

          if (partNumberIndexes[i]) {
            partNumberIndexes[i].push(bottomLeftNeighbourNumber)
          } else {
            partNumberIndexes[i] = [bottomLeftNeighbourNumber]
          }
        }

        const bottomRightNeighbourNumber = getBottomRightNeighbour(array, {
          row: i,
          col: x,
        })

        if (bottomRightNeighbourNumber.length > 0) {
          neighbourCount = neighbourCount + 1
          if (neighbourCount > 2) {
            continue
          }

          if (partNumberIndexes[i]) {
            partNumberIndexes[i].push(bottomRightNeighbourNumber)
          } else {
            partNumberIndexes[i] = [bottomRightNeighbourNumber]
          }
        }

        if (neighbourCount === 2) {
          const firstNumber = parseInt(partNumberIndexes[i][0])
          const secondNumber = parseInt(partNumberIndexes[i][1])

          gearRatioSum = gearRatioSum + firstNumber * secondNumber
        }

        partNumberIndexes[i] = []
      }
    }

    console.log(gearRatioSum)
  })
} catch (err) {
  console.log(
    `Error processing file data. Check to see if your file is formatted correctly:\n ${err}`,
  )
}
