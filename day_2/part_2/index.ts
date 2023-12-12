import fs from 'fs'

const FILE_PATH = './day_2/part_2/puzzel_input.txt'

try {
  /* Read values from files */
  fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      console.log(`Error reading file: ${err}`)
      return
    }

    let poweredCubeSum = 0

    /*
     * Split values into array by \r\n
     */
    const array = data.split('\r\n')

    for (let i = 0; i < array.length; i++) {
      const game = array[i]

      /* Separate "Game X:" string from cube color count data */
      const gameArr = game.split(': ')

      /* Separate each hand into individual array elements */
      const gameHands = gameArr[1].split('; ')

      const highestCubeCount = {
        red: 0,
        green: 0,
        blue: 0,
      }

      for (let x = 0; x < gameHands.length; x++) {
        const gameHand = gameHands[x]
        const countedGameHand = countHand(gameHand)

        if (countedGameHand.red > highestCubeCount.red) {
          highestCubeCount.red = countedGameHand.red
        }

        if (countedGameHand.green > highestCubeCount.green) {
          highestCubeCount.green = countedGameHand.green
        }

        if (countedGameHand.blue > highestCubeCount.blue) {
          highestCubeCount.blue = countedGameHand.blue
        }
      }

      const poweredCubeCount =
        highestCubeCount.red * highestCubeCount.green * highestCubeCount.blue

      poweredCubeSum = poweredCubeSum + poweredCubeCount
    }

    console.log(poweredCubeSum)
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
