import fs from 'fs'

const FILE_PATH = './day_2/part_1/puzzel_input.txt'

const RED_TOTAL = 12
const GREEN_TOTAL = 13
const BLUE_TOTAL = 14

type Hand = {
  red: number
  green: number
  blue: number
}

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
    const array = data.split('\r\n')

    let validGamesSum = 0

    for (let i = 0; i < array.length; i++) {
      const game = array[i]

      /* Separate "Game X:" string from cube color count data */
      const gameArr = game.split(': ')

      const gameId = parseInt(gameArr[0].replace('Game ', ''))

      /* Separate each hand into individual array elements */
      const gameHands = gameArr[1].split('; ')

      let isValidGame = true

      for (let x = 0; x < gameHands.length; x++) {
        const gameHand = gameHands[x]

        const countedGameHand = countHand(gameHand)

        if (countedGameHand.red > RED_TOTAL) {
          isValidGame = false
          break
        }

        if (countedGameHand.green > GREEN_TOTAL) {
          isValidGame = false
          break
        }

        if (countedGameHand.blue > BLUE_TOTAL) {
          isValidGame = false
          break
        }
      }

      if (isValidGame) {
        validGamesSum = validGamesSum + gameId
      }
    }

    console.log(validGamesSum)
  })
} catch (err) {
  console.log(
    `Error processing file data. Check to see if your file is formatted correctly:\n ${err}`,
  )
}

function countHand(gameHand: string) {
  const redCount = gameHand
    .match(/\d+\s(?:red)/g)
    ?.map((red) => red.replace(' red', ''))

  const greenCount = gameHand
    .match(/\d+\s(?:green)/g)
    ?.map((green) => green.replace(' green', ''))

  const blueCount = gameHand
    .match(/\d+\s(?:blue)/g)
    ?.map((blue) => blue.replace(' blue', ''))

  return {
    red: redCount ? parseInt(redCount[0]) : 0,
    green: greenCount ? parseInt(greenCount[0]) : 0,
    blue: blueCount ? parseInt(blueCount[0]) : 0,
  }
}
