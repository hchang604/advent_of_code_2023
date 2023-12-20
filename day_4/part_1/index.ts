import fs from 'fs'

const FILE_PATH = './day_4/part_1/scratch_cards.txt'
const NUMBERS_REGEX = /\d/

type ScratchCard = {
  winningNumbers: string[]
  numbers: string[]
}

/* Read values from files */
fs.readFile(FILE_PATH, 'utf8', (err, data) => {
  if (err) {
    console.log(
      `Error reading file: ${err}\nCheck if your file is formatted correctly.`,
    )
    return
  }

  /*
   * Split values into array by \r\n
   */
  const rawDataArr = data.split('\r\n')
  const formattedDataArr: ScratchCard[] = []

  /*
   * Format data
   */
  for (let x = 0; x < rawDataArr.length; x++) {
    const value = rawDataArr[x]
    const stripColon = value.split(':')[1]
    const winningNumbers = stripColon.split('|')[0]
    const numbers = stripColon.split('|')[1]

    formattedDataArr[x] = {
      winningNumbers: winningNumbers
        .trim()
        .split(' ')
        .filter((number) => NUMBERS_REGEX.test(number)),
      numbers: numbers
        .trim()
        .split(' ')
        .filter((number) => NUMBERS_REGEX.test(number)),
    }
  }

  let totalPointsSum = 0

  for (let y = 0; y < formattedDataArr.length; y++) {
    const winningNumbers = formattedDataArr[y].winningNumbers
    const numbers = formattedDataArr[y].numbers

    let totalPoints = 0
    for (let z = 0; z < winningNumbers.length; z++) {
      const winningNumber = winningNumbers[z]

      const matchFound =
        numbers.find((number) => number === winningNumber) !== undefined

      if (matchFound) {
        if (totalPoints === 0) {
          totalPoints = 1
        } else {
          totalPoints = totalPoints * 2
        }
      }
    }

    totalPointsSum = totalPointsSum + totalPoints
  }

  console.log(totalPointsSum)
})
