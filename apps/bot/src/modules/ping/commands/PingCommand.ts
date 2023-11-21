import {
    command,
    DiscordCommand,
    IDiscordCommand,
    IDiscordCommandData,
} from "@sidia/discord-command"
import {Colors, EmbedBuilder} from "discord.js"
import {injectService} from "@sidia/service"
import {DiscordService} from "@sidia/discord"

const commandConfig: IDiscordCommand<IDiscordCommandData> = {
    command: "ping",
    description: "ping.commands.ping.description"
}

@command(commandConfig)
export class PingCommand extends DiscordCommand<IDiscordCommandData> {

    @injectService
    private discordService!: DiscordService

    public async handle({interaction}: IDiscordCommandData): Promise<void> {
        const client = this.discordService.getClient()

        const timestamp = Date.now()

        const rtt = client.ws.ping;
        const rttString = rtt == -1 ? "still evaluating" : rtt + "ms"
        const message = new EmbedBuilder()
        message.setTitle("Ping!")
        message.setColor(Colors.Green)
        message.setDescription("You have requested a ping!")
        message.addFields(
            {name: "Uptime", value: this.msToTime(client.uptime ?? 0)},
            {name: "API", value: rttString},
            {name: "Server", value: "pinging..."},
        )

        const reply = await interaction.reply({embeds: [message], fetchReply: true})
        message.addFields({name: "Round-trip", value: (Date.now() - reply.createdTimestamp).toString() + "ms"},)
        message.setFields(
            {name: "Uptime", value: this.msToTime(client.uptime ?? 0)},
            {name: "API", value: rttString},
            {name: "Server", value: (reply.createdTimestamp - interaction.createdTimestamp).toString() + "ms"},
        )
        await reply.edit({embeds: [message]})
    }

    private msToTime(ms: number): string {
        const days = Math.floor(ms / (60 * 1000 * 60 * 24));
        const daysms = ms % (60 * 1000 * 60 * 24);
        const hours = Math.floor(daysms / (60 * 1000 * 60));
        const hoursms = ms % (60 * 1000 * 60);
        const minutes = Math.floor(hoursms / (60 * 1000));
        const minutesms = ms % (60 * 1000);
        const sec = Math.floor(minutesms / 1000);

        let str = "";
        if (days) str = str + days + "d" + " ";
        if (hours) str = str + hours + "h" + " ";
        if (minutes) str = str + minutes + "m" + " ";
        if (sec) str = str + sec + "s";

        return str;
    }

}
