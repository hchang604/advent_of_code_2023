import fs from 'fs'

const FILE_PATH = './day_1/part_2/calibration_values.txt'

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
  const calibrationValues = array.map((value) => {
    const getDigitsArr = getDigits(value)

    return getDigitsArr.map((digit) => convertStringToNumber(digit))
  })

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
  const DIGITS_ONLY_REGEX = /(one|two|three|four|five|six|seven|eight|nine|\d)/g

  return value.match(DIGITS_ONLY_REGEX) ?? []
}

const convertStringToNumber = (value: string) => {
  switch (value) {
    case 'one':
      return '1'
    case 'two':
      return '2'
    case 'three':
      return '3'
    case 'four':
      return '4'
    case 'five':
      return '5'
    case 'six':
      return '6'
    case 'seven':
      return '7'
    case 'eight':
      return '8'
    case 'nine':
      return '9'
    default:
      return value
  }
}
