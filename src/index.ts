import { createLogger, format, transports } from 'winston'

const { combine, timestamp, prettyPrint } = format

/// logger to std::out
const logger = createLogger({
  format: combine(
    timestamp(),
    prettyPrint()
  ),
  /// we can add custom transports here
  transports: [new transports.Console()]
})

/// usage
/// JSON payload, a label to categorize the log, and the level
export function log(payload: any, label: string, level: string) {

  logger.log({
    label,
    level,
    message: payload
  })

}
