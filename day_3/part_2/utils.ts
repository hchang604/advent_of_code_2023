const NUMBERS_REGEX = /[0-9]+/

export const getRightNeighbour = (
  array: string[][],
  { row, col }: { row: number; col: number },
) => {
  const rightNeighbour = array[row][col - 1]

  let rightNeighbourIndexes: number[] = []

  if (NUMBERS_REGEX.test(rightNeighbour)) {
    rightNeighbourIndexes.push(col - 1)
    const index = col - 1

    let currentPositionGoingLeft = index - 1
    while (NUMBERS_REGEX.test(array[row][currentPositionGoingLeft])) {
      rightNeighbourIndexes.push(currentPositionGoingLeft)
      currentPositionGoingLeft = currentPositionGoingLeft - 1
    }
  }

  rightNeighbourIndexes = rightNeighbourIndexes.sort((a, b) => a - b)

  let rightNeightbourNumber = ''
  for (let y = 0; y < rightNeighbourIndexes.length; y++) {
    const index = rightNeighbourIndexes[y]
    if (NUMBERS_REGEX.test(array[row][index])) {
      rightNeightbourNumber = rightNeightbourNumber + array[row][index]
    }
  }

  return rightNeightbourNumber
}

export const getLeftNeighbour = (
  array: string[][],
  { row, col }: { row: number; col: number },
) => {
  const leftNeighbour = array[row][col + 1]

  let leftNeighbourIndexes: number[] = []

  if (NUMBERS_REGEX.test(leftNeighbour)) {
    leftNeighbourIndexes.push(col + 1)
    const index = col + 1

    let currentPositionGoingLeft = index + 1
    while (NUMBERS_REGEX.test(array[row][currentPositionGoingLeft])) {
      leftNeighbourIndexes.push(currentPositionGoingLeft)
      currentPositionGoingLeft = currentPositionGoingLeft + 1
    }
  }

  leftNeighbourIndexes = leftNeighbourIndexes.sort((a, b) => a - b)

  let leftNeightbourNumber = ''
  for (let y = 0; y < leftNeighbourIndexes.length; y++) {
    const index = leftNeighbourIndexes[y]
    if (NUMBERS_REGEX.test(array[row][index])) {
      leftNeightbourNumber = leftNeightbourNumber + array[row][index]
    }
  }

  return leftNeightbourNumber
}

export const getTopNeighbour = (
  array: string[][],
  { row, col }: { row: number; col: number },
) => {
  const topNeighbour = array[row - 1][col]

  let topNeighbourIndexes: number[] = []

  if (NUMBERS_REGEX.test(topNeighbour)) {
    topNeighbourIndexes.push(col)
    const index = col

    let currentPositionGoingLeft = index + 1
    while (NUMBERS_REGEX.test(array[row - 1][currentPositionGoingLeft])) {
      topNeighbourIndexes.push(currentPositionGoingLeft)
      currentPositionGoingLeft = currentPositionGoingLeft + 1
    }

    let currentPositionGoingRight = index - 1
    while (NUMBERS_REGEX.test(array[row - 1][currentPositionGoingRight])) {
      topNeighbourIndexes.push(currentPositionGoingRight)
      currentPositionGoingRight = currentPositionGoingRight - 1
    }
  }

  topNeighbourIndexes = topNeighbourIndexes.sort((a, b) => a - b)

  let topNeighbourNumber = ''
  for (let y = 0; y < topNeighbourIndexes.length; y++) {
    const index = topNeighbourIndexes[y]
    if (NUMBERS_REGEX.test(array[row - 1][index])) {
      topNeighbourNumber = topNeighbourNumber + array[row - 1][index]
    }
  }

  return topNeighbourNumber
}

export const getBottomNeighbour = (
  array: string[][],
  { row, col }: { row: number; col: number },
) => {
  const bottomNeighbour = array[row + 1][col]

  let bottomNeighbourIndexes: number[] = []

  if (NUMBERS_REGEX.test(bottomNeighbour)) {
    bottomNeighbourIndexes.push(col)
    const index = col

    let currentPositionGoingLeft = index + 1
    while (NUMBERS_REGEX.test(array[row + 1][currentPositionGoingLeft])) {
      bottomNeighbourIndexes.push(currentPositionGoingLeft)
      currentPositionGoingLeft = currentPositionGoingLeft + 1
    }

    let currentPositionGoingRight = index - 1
    while (NUMBERS_REGEX.test(array[row + 1][currentPositionGoingRight])) {
      bottomNeighbourIndexes.push(currentPositionGoingRight)
      currentPositionGoingRight = currentPositionGoingRight - 1
    }
  }

  bottomNeighbourIndexes = bottomNeighbourIndexes.sort((a, b) => a - b)

  let bottomNeighbourNumber = ''
  for (let y = 0; y < bottomNeighbourIndexes.length; y++) {
    const index = bottomNeighbourIndexes[y]
    if (NUMBERS_REGEX.test(array[row + 1][index])) {
      bottomNeighbourNumber = bottomNeighbourNumber + array[row + 1][index]
    }
  }

  return bottomNeighbourNumber
}

export const getTopLeftNeighbour = (
  array: string[][],
  { row, col }: { row: number; col: number },
) => {
  const topLeftNeighbour = array[row - 1][col + 1]
  const topNeighbour = array[row - 1][col]

  /* If top neighbour exists, no top diagonal neighbours can exist */
  if (NUMBERS_REGEX.test(topNeighbour)) {
    return ''
  }

  let topLeftNeighbourIndexes: number[] = []
  if (NUMBERS_REGEX.test(topLeftNeighbour)) {
    topLeftNeighbourIndexes.push(col + 1)
    const index = col + 1

    let currentPositionGoingLeft = index + 1
    while (NUMBERS_REGEX.test(array[row - 1][currentPositionGoingLeft])) {
      topLeftNeighbourIndexes.push(currentPositionGoingLeft)
      currentPositionGoingLeft = currentPositionGoingLeft + 1
    }
  }

  topLeftNeighbourIndexes = topLeftNeighbourIndexes.sort((a, b) => a - b)

  let topLeftNeighbourNumber = ''
  for (let y = 0; y < topLeftNeighbourIndexes.length; y++) {
    const index = topLeftNeighbourIndexes[y]

    if (NUMBERS_REGEX.test(array[row - 1][index])) {
      topLeftNeighbourNumber = topLeftNeighbourNumber + array[row - 1][index]
    }
  }

  return topLeftNeighbourNumber
}

export const getTopRightNeighbour = (
  array: string[][],
  { row, col }: { row: number; col: number },
) => {
  const topRightNeighbour = array[row - 1][col - 1]
  const topNeighbour = array[row - 1][col]

  /* If top neighbour exists, no top diagonal neighbours can exist */
  if (NUMBERS_REGEX.test(topNeighbour)) {
    return ''
  }

  let topRightNeighbourIndexes: number[] = []
  if (NUMBERS_REGEX.test(topRightNeighbour)) {
    topRightNeighbourIndexes.push(col - 1)
    const index = col - 1

    let currentPositionGoingRight = index - 1
    while (NUMBERS_REGEX.test(array[row - 1][currentPositionGoingRight])) {
      topRightNeighbourIndexes.push(currentPositionGoingRight)
      currentPositionGoingRight = currentPositionGoingRight - 1
    }
  }

  topRightNeighbourIndexes = topRightNeighbourIndexes.sort((a, b) => a - b)

  let topRightNeighbourNumber = ''
  for (let y = 0; y < topRightNeighbourIndexes.length; y++) {
    const index = topRightNeighbourIndexes[y]

    if (NUMBERS_REGEX.test(array[row - 1][index])) {
      topRightNeighbourNumber = topRightNeighbourNumber + array[row - 1][index]
    }
  }

  return topRightNeighbourNumber
}

export const getBottomLeftNeighbour = (
  array: string[][],
  { row, col }: { row: number; col: number },
) => {
  const bottomLeftNeighbour = array[row + 1][col + 1]
  const bottomNeighbour = array[row + 1][col]

  /* If bottom neighbour exists, no bottom diagonal neighbours can exist */
  if (NUMBERS_REGEX.test(bottomNeighbour)) {
    return ''
  }

  let bottomLeftNeighbourIndexes: number[] = []
  if (NUMBERS_REGEX.test(bottomLeftNeighbour)) {
    bottomLeftNeighbourIndexes.push(col + 1)
    const index = col + 1

    let currentPositionGoingLeft = index + 1
    while (NUMBERS_REGEX.test(array[row + 1][currentPositionGoingLeft])) {
      bottomLeftNeighbourIndexes.push(currentPositionGoingLeft)
      currentPositionGoingLeft = currentPositionGoingLeft + 1
    }
  }

  bottomLeftNeighbourIndexes = bottomLeftNeighbourIndexes.sort((a, b) => a - b)

  let bottomLeftNeighbourNumber = ''
  for (let y = 0; y < bottomLeftNeighbourIndexes.length; y++) {
    const index = bottomLeftNeighbourIndexes[y]

    if (NUMBERS_REGEX.test(array[row + 1][index])) {
      bottomLeftNeighbourNumber =
        bottomLeftNeighbourNumber + array[row + 1][index]
    }
  }

  return bottomLeftNeighbourNumber
}

export const getBottomRightNeighbour = (
  array: string[][],
  { row, col }: { row: number; col: number },
) => {
  const bottomRightNeighbour = array[row + 1][col - 1]
  const bottomNeighbour = array[row + 1][col]

  /* If bottom neighbour exists, no bottom diagonal neighbours can exist */
  if (NUMBERS_REGEX.test(bottomNeighbour)) {
    return ''
  }

  let bottomRightNeighbourIndexes: number[] = []
  if (NUMBERS_REGEX.test(bottomRightNeighbour)) {
    bottomRightNeighbourIndexes.push(col - 1)
    const index = col - 1

    let currentPositionGoingRight = index - 1
    while (NUMBERS_REGEX.test(array[row + 1][currentPositionGoingRight])) {
      bottomRightNeighbourIndexes.push(currentPositionGoingRight)
      currentPositionGoingRight = currentPositionGoingRight - 1
    }
  }

  bottomRightNeighbourIndexes = bottomRightNeighbourIndexes.sort(
    (a, b) => a - b,
  )

  let bottomRightNeighbourNumber = ''
  for (let y = 0; y < bottomRightNeighbourIndexes.length; y++) {
    const index = bottomRightNeighbourIndexes[y]

    if (NUMBERS_REGEX.test(array[row + 1][index])) {
      bottomRightNeighbourNumber =
        bottomRightNeighbourNumber + array[row + 1][index]
    }
  }

  return bottomRightNeighbourNumber
}
