module.exports = {
  name: 'cal',
  cooldown: 2,
  description: 'Calculates something!',
  execute (client, message, args) {
    const method = args[0]
    const firstNumber = Number(args[1])
    const secondNumber = Number(args[2])
    const operations = ['add', 'subtract', 'multiply', 'divide']

    if (!method) return message.lineReply('Please state a operation.')// if (!args[0]) = no method

    if (!operations.includes(method)) return message.lineReply('When choosing an operation please select add, subtract, multiply or divide.')// no add, subtract, multiply, divide

    if (!args[1]) return message.lineReply('Please state two number to put into the calculation.')// no first no.

    if (!args[2]) return message.lineReply('Please state two number to put into the calculation.')// no sec no.

    if (isNaN(firstNumber)) return message.lineReply('The first number you stated is not a number.')// first is not number

    if (isNaN(secondNumber)) return message.lineReply('The second number you stated is not a number.')// second is not number

    if (method === 'add') {
      const doMath = firstNumber + secondNumber
      message.lineReplyNoMention(`${firstNumber} + ${secondNumber} = ${doMath}`)
    }

    if (method === 'subtract') {
      const doMath = firstNumber - secondNumber
      message.lineReplyNoMention(`${firstNumber} - ${secondNumber} = ${doMath}`)
    }

    if (method === 'multiply') {
      const doMath = firstNumber * secondNumber
      message.lineReplyNoMention(`${firstNumber} * ${secondNumber} = ${doMath}`)
    }

    if (method === 'divide') {
      const doMath = firstNumber / secondNumber
      message.lineReplyNoMention(`${firstNumber} / ${secondNumber} = ${doMath}`)
    }
  }
}
