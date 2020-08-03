var { members, alias, save } = require('../../globals.js')

module.exports = {
    name: "delalias",
    desc: "Removes an alias from a command.",
    args: true,
    args_length: 2,
    admin: true,
    usage: "!alias <command> <alias>",
    async execute(message, args) {

      // Seperate the command to be updated and the new alias to be added.
      command = args[0]
      rem_alias = args[1]

      if (alias.find(item => item[Object.keys(item)[0]].includes(rem_alias))) {

        // Get the command-- if an entry doesn't exist in <alias> add a new entry.

        find = alias.find(item => item.hasOwnProperty(command))
        find[command].splice(rem_alias)

        save(alias, "alias")
        await message.channel.send(`Removed "${rem_alias}" from ${command}'s aliases'.`)
      }
      else await message.channel.send(`${rem_alias} does not exist as an alias or command.`)
    }
}