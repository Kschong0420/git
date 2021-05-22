module.exports = {
    name: "math",
    cooldown: 3,
    description: "performs simple math functions",
    execute(client, message, args) {
      let op = args[0]
      let no1 = args[1]
      let no2 = args[2]
  
      let parseNo1 = parseInt(no1)
      let parseNo2 = parseInt(no2)
  
      let ans
  
      if (!op) {
        message.reply("You need to enter the operation and operands next to the command as follow: \`v math <add/subtract/multiply/divide/mod/power/root> <FirstNumber> <SecondNumber>\`")
      }
  
      else {
        if (op === "add") {
          if (!args[1] || !args[2]) {
            message.reply("You need to enter the operation and operands next to the command as follow: \`v math add <FirstNumber> <SecondNumber>\`")
          }
          else {
            ans = parseNo1 + parseNo2
            message.channel.send("You answer is " + ans)
          }
        }
        else if (op === "subtract") {
        if (!args[1] || !args[2]) {
            message.reply("You need to enter the operation and operands next to the command as follow: \`v math subtract <FirstNumber> <SecondNumber>\`")
          }
          else {
            ans = parseNo1 - parseNo2
            message.channel.send("You answer is " + ans)
          }
        }
        else if (op === "multiply") {
          if (!args[1] || !args[2]) {
            message.reply("You need to enter the operation and operands next to the command as follow: \`v math multiply <FirstNumber> <SecondNumber>\`")
          }
          else {
            ans = parseNo1 * parseNo2
            message.channel.send("You answer is " + ans)
          }
        }
        else if (op === "divide") {
          if (!args[1] || !args[2]) {
            message.reply("You need to enter the operation and operands next to the command as follow: \`v math divide <FirstNumber> <SecondNumber>\`")
          }
          else {
            ans = parseNo1 / parseNo2
            message.channel.send("You answer is " + ans)
          }
        }
        else if (op === "mod") {
          if (!args[1] || !args[2]) {
            message.reply("You need to enter the operation and operands next to the command as follow: \`v math mod <FirstNumber> <SecondNumber>\`")
          }
          else {
            ans = parseNo1 % parseNo2
            message.channel.send("You answer is " + ans)
          }
        }
        else if (op === "power") {
          if (!args[1] || !args[2]) {
            message.reply("You need to enter the operation and operands next to the command as follow: \`v math power <FirstNumber> <SecondNumber>\`")
          }
          else {
            ans = Math.pow(parseNo1, parseNo2)
            message.channel.send("You answer is " + ans)
          }
        }
        else if (op === "root") {
          if (!args[1] || !args[2]) {
            message.reply("You need to enter the operation and operands next to the command as follow: \`v math root <FirstNumber> <SecondNumber>\`")
          }
          else {
            ans = Math.pow(parseNo1, 1/parseNo2)
            message.channel.send("You answer is " + ans)
          }
        }
      }
    }
  }

//note:
//add , subtract , multiply , divide cannot count point
//mod calculation result not true
//power and root work well