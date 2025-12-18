// Node modules
import chalk from "chalk"


type Loglevel = 'info' | 'warn' | 'error' | 'debug'

class Logger {
    private formatMessage(level: Loglevel, message: string): string{
        const timestamp = new Date().toISOString()
        return `[${timestamp}] [${level.toUpperCase()}]: ${message}`
    }

    info(message: string){
        console.log(chalk.blue(this.formatMessage("info",message)))
    }
    warn(message: string){
        console.log(chalk.yellow(this.formatMessage("warn",message)))
    }
    error(message: string){
        console.log(chalk.red(this.formatMessage("error",message)))
    }
    debug(message: string){
        console.log(chalk.green(this.formatMessage("debug",message)))
    }   
}

export const logger = new Logger()