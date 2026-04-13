import { ChatInputCommandInteraction, SlashCommandOptionsOnlyBuilder } from 'discord.js'

export default interface Command {
  run: (args: ChatInputCommandInteraction) => any
  metadata: SlashCommandOptionsOnlyBuilder
}
