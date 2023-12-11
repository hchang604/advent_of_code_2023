import fs from 'fs'

const FILE_PATH = './day_1/part_1/calibration_values.txt'

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
  const array = data.split('\r\n')

  /* Extract digits from each value */
  const calibrationValues = array.map((value) => getDigits(value))

  let sum = 0

  calibrationValues.forEach((value) => {
    const firstDigit = value[0]
    const lastDigit = value[value.length - 1]

    const calibrationValue = parseInt(firstDigit + lastDigit)

    sum = sum + calibrationValue
  })

  console.log(sum)
})

const getDigits = (value: string) => {
  const DIGITS_ONLY_REGEX = /\d/g

  return value.match(DIGITS_ONLY_REGEX) ?? []
}
