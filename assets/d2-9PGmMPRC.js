function e(r){switch(r){case"commandFlow":return`direction: right\r
\r
BotUser: {\r
  label: "Bot User"\r
  shape: person\r
}\r
JobMonitoringBotHandlersLayer: {\r
  label: "Handlers Layer"\r
\r
  HandlersCommandsHandlerCommandsModuleStartHandler: {\r
    label: "start_command_handler()"\r
  }\r
  HandlersCommandsHandlerCommandsModuleStatusHandler: {\r
    label: "status_command_handler()"\r
  }\r
  HandlersCommandsHandlerCommandsModuleStatsHandler: {\r
    label: "stats_command_handler()"\r
  }\r
  HandlersCommandsHandlerCommandsModuleHelpHandler: {\r
    label: "help_command_handler()"\r
  }\r
}\r
JobMonitoringBotServicesLayer: {\r
  label: "Services Layer"\r
\r
  ServicesBotHandler: {\r
    label: "Bot Handler"\r
\r
    BotHandlerClass: {\r
      label: "BotHandler"\r
\r
      StartCommand: {\r
        label: "handle_start_command()"\r
      }\r
      StatusCommand: {\r
        label: "handle_status_command()"\r
      }\r
      StatsCommand: {\r
        label: "handle_stats_command()"\r
      }\r
      HelpCommand: {\r
        label: "handle_help_command()"\r
      }\r
      UpdateStats: {\r
        label: "update_statistics()"\r
      }\r
      FormatStats: {\r
        label: "format_statistics()"\r
      }\r
    }\r
  }\r
  ServicesTelegramService: {\r
    label: "Telegram Service"\r
\r
    TelegramServiceClassGetStats: {\r
      label: "get_statistics()"\r
    }\r
  }\r
}\r
\r
JobMonitoringBotHandlersLayer.HandlersCommandsHandlerCommandsModuleStartHandler -> JobMonitoringBotServicesLayer.ServicesBotHandler.BotHandlerClass.StartCommand: "Delegates to bot handler"\r
JobMonitoringBotHandlersLayer.HandlersCommandsHandlerCommandsModuleStatusHandler -> JobMonitoringBotServicesLayer.ServicesBotHandler.BotHandlerClass.StatusCommand: "Delegates to bot handler"\r
JobMonitoringBotHandlersLayer.HandlersCommandsHandlerCommandsModuleStatsHandler -> JobMonitoringBotServicesLayer.ServicesBotHandler.BotHandlerClass.StatsCommand: "Delegates to bot handler"\r
JobMonitoringBotHandlersLayer.HandlersCommandsHandlerCommandsModuleHelpHandler -> JobMonitoringBotServicesLayer.ServicesBotHandler.BotHandlerClass.HelpCommand: "Delegates to bot handler"\r
JobMonitoringBotServicesLayer.ServicesBotHandler.BotHandlerClass.StartCommand -> JobMonitoringBotServicesLayer.ServicesBotHandler.BotHandlerClass.UpdateStats: "Updates usage statistics"\r
JobMonitoringBotServicesLayer.ServicesBotHandler.BotHandlerClass.StatusCommand -> JobMonitoringBotServicesLayer.ServicesTelegramService.TelegramServiceClassGetStats: "Retrieves current statistics"\r
JobMonitoringBotServicesLayer.ServicesBotHandler.BotHandlerClass.StatsCommand -> JobMonitoringBotServicesLayer.ServicesBotHandler.BotHandlerClass.FormatStats: "Formats statistics for display"\r
`;case"dataFlow":return`direction: right\r
\r
BotUser: {\r
  label: "Bot User"\r
  shape: person\r
}\r
SourceChannels: {\r
  label: "Source Channels"\r
}\r
TargetChat: {\r
  label: "Target Chat"\r
}\r
JobMonitoringBotServicesLayerServicesTelegramService: {\r
  label: "Telegram Service"\r
\r
  TelegramServiceClass: {\r
    label: "TelegramService"\r
\r
    ProcessMessage: {\r
      label: "process_new_message()"\r
    }\r
    ForwardMessage: {\r
      label: "forward_message()"\r
    }\r
  }\r
}\r
JobMonitoringBotServicesLayerServicesMessageProcessor: {\r
  label: "Message Processor"\r
\r
  MessageProcessorClass: {\r
    label: "MessageProcessor"\r
\r
    ShouldForward: {\r
      label: "should_forward_message()"\r
    }\r
    ExtractJobInfo: {\r
      label: "extract_job_info()"\r
    }\r
    ContainsKeywords: {\r
      label: "contains_keywords()"\r
    }\r
    ContainsExclusions: {\r
      label: "contains_exclusion_words()"\r
    }\r
    ValidateMessage: {\r
      label: "validate_message_format()"\r
    }\r
  }\r
}\r
JobMonitoringBotServicesLayerServicesPersistentStorage: {\r
  label: "Persistent Storage"\r
\r
  PersistentStorageClassIsForwarded: {\r
    label: "is_message_forwarded()"\r
  }\r
  PersistentStorageClassAddForwarded: {\r
    label: "add_forwarded_message()"\r
  }\r
  PersistentStorageClassCleanupOld: {\r
    label: "cleanup_old_entries()"\r
  }\r
}\r
\r
JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass.ProcessMessage -> JobMonitoringBotServicesLayerServicesMessageProcessor.MessageProcessorClass.ShouldForward: "Checks if message should be forwarded"\r
JobMonitoringBotServicesLayerServicesMessageProcessor.MessageProcessorClass.ShouldForward -> JobMonitoringBotServicesLayerServicesMessageProcessor.MessageProcessorClass.ContainsKeywords: "Validates required keywords"\r
JobMonitoringBotServicesLayerServicesMessageProcessor.MessageProcessorClass.ShouldForward -> JobMonitoringBotServicesLayerServicesMessageProcessor.MessageProcessorClass.ContainsExclusions: "Checks exclusion words"\r
JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass.ProcessMessage -> JobMonitoringBotServicesLayerServicesPersistentStorage.PersistentStorageClassIsForwarded: "Checks if already forwarded"\r
JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass.ProcessMessage -> JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass.ForwardMessage: "Forwards approved messages"\r
JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass.ForwardMessage -> JobMonitoringBotServicesLayerServicesPersistentStorage.PersistentStorageClassAddForwarded: "Records forwarded message"\r
JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass.ProcessMessage -> JobMonitoringBotServicesLayerServicesMessageProcessor.MessageProcessorClass.ExtractJobInfo: "Extracts job information"\r
JobMonitoringBotServicesLayerServicesMessageProcessor.MessageProcessorClass.ExtractJobInfo -> JobMonitoringBotServicesLayerServicesMessageProcessor.MessageProcessorClass.ValidateMessage: "Validates extracted data"\r
JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass.ProcessMessage -> JobMonitoringBotServicesLayerServicesPersistentStorage.PersistentStorageClassCleanupOld: "Cleans up old entries"\r
`;case"index":return`direction: down\r
\r
BotUser: {\r
  label: "Bot User"\r
  shape: person\r
}\r
JobMonitoringBot: {\r
  label: "Job Monitoring Bot"\r
}\r
TelegramPlatform: {\r
  label: "Telegram Platform"\r
}\r
SourceChannels: {\r
  label: "Source Channels"\r
}\r
TargetChat: {\r
  label: "Target Chat"\r
}\r
\r
BotUser -> JobMonitoringBot: "Uses bot commands"\r
JobMonitoringBot -> TelegramPlatform: "Connects via API"\r
JobMonitoringBot -> SourceChannels: "Monitors for new messages"\r
JobMonitoringBot -> TargetChat: "Forwards filtered messages"\r
`;case"jobMonitoringBot":return`direction: down\r
\r
JobMonitoringBot: {\r
  label: "Job Monitoring Bot"\r
\r
  ApplicationLayer: {\r
    label: "Application Layer"\r
  }\r
  HandlersLayer: {\r
    label: "Handlers Layer"\r
  }\r
  ServicesLayer: {\r
    label: "Services Layer"\r
  }\r
  ConfigurationLayer: {\r
    label: "Configuration Layer"\r
  }\r
  UtilitiesLayer: {\r
    label: "Utilities Layer"\r
  }\r
  DataLayer: {\r
    label: "Data Storage Layer"\r
  }\r
}\r
\r
JobMonitoringBot.ApplicationLayer -> JobMonitoringBot.ServicesLayer: "[...]"\r
JobMonitoringBot.ApplicationLayer -> JobMonitoringBot.UtilitiesLayer: "Configures application logging"\r
JobMonitoringBot.ServicesLayer -> JobMonitoringBot.ConfigurationLayer: "[...]"\r
JobMonitoringBot.ServicesLayer -> JobMonitoringBot.UtilitiesLayer: "[...]"\r
JobMonitoringBot.HandlersLayer -> JobMonitoringBot.ServicesLayer: "[...]"\r
JobMonitoringBot.HandlersLayer -> JobMonitoringBot.UtilitiesLayer: "Logs command errors"\r
`;case"applicationLayer":return`direction: down\r
\r
JobMonitoringBotApplicationLayer: {\r
  label: "Application Layer"\r
\r
  MainApp: {\r
    label: "Main Application"\r
  }\r
  BotCore: {\r
    label: "Bot Core"\r
  }\r
}\r
JobMonitoringBotUtilitiesLayer: {\r
  label: "Utilities Layer"\r
}\r
JobMonitoringBotServicesLayer: {\r
  label: "Services Layer"\r
}\r
\r
JobMonitoringBotApplicationLayer.MainApp -> JobMonitoringBotApplicationLayer.BotCore: "[...]"\r
JobMonitoringBotApplicationLayer.MainApp -> JobMonitoringBotUtilitiesLayer: "Configures application logging"\r
JobMonitoringBotApplicationLayer.BotCore -> JobMonitoringBotServicesLayer: "[...]"\r
`;case"configurationLayer":return`direction: down\r
\r
JobMonitoringBotServicesLayer: {\r
  label: "Services Layer"\r
}\r
JobMonitoringBotConfigurationLayer: {\r
  label: "Configuration Layer"\r
\r
  Configuration: {\r
    label: "Configuration"\r
  }\r
}\r
\r
JobMonitoringBotServicesLayer -> JobMonitoringBotConfigurationLayer.Configuration: "[...]"\r
`;case"dataLayer":return`direction: down\r
\r
JobMonitoringBotDataLayer: {\r
  label: "Data Storage Layer"\r
\r
  DataStorage: {\r
    label: "Data Storage"\r
  }\r
}\r
`;case"handlersLayer":return`direction: down\r
\r
JobMonitoringBotHandlersLayer: {\r
  label: "Handlers Layer"\r
\r
  Handlers: {\r
    label: "Command Handlers"\r
  }\r
}\r
JobMonitoringBotServicesLayer: {\r
  label: "Services Layer"\r
}\r
JobMonitoringBotUtilitiesLayer: {\r
  label: "Utilities Layer"\r
}\r
\r
JobMonitoringBotHandlersLayer.Handlers -> JobMonitoringBotServicesLayer: "[...]"\r
JobMonitoringBotHandlersLayer.Handlers -> JobMonitoringBotUtilitiesLayer: "Logs command errors"\r
`;case"servicesLayer":return`direction: down\r
\r
JobMonitoringBotApplicationLayer: {\r
  label: "Application Layer"\r
}\r
JobMonitoringBotHandlersLayer: {\r
  label: "Handlers Layer"\r
}\r
JobMonitoringBotServicesLayer: {\r
  label: "Services Layer"\r
\r
  Services: {\r
    label: "Services"\r
  }\r
}\r
JobMonitoringBotConfigurationLayer: {\r
  label: "Configuration Layer"\r
}\r
JobMonitoringBotUtilitiesLayer: {\r
  label: "Utilities Layer"\r
}\r
\r
JobMonitoringBotApplicationLayer -> JobMonitoringBotServicesLayer.Services: "[...]"\r
JobMonitoringBotHandlersLayer -> JobMonitoringBotServicesLayer.Services: "[...]"\r
JobMonitoringBotServicesLayer.Services -> JobMonitoringBotConfigurationLayer: "[...]"\r
JobMonitoringBotServicesLayer.Services -> JobMonitoringBotUtilitiesLayer: "[...]"\r
`;case"utilitiesLayer":return`direction: down\r
\r
JobMonitoringBotApplicationLayer: {\r
  label: "Application Layer"\r
}\r
JobMonitoringBotServicesLayer: {\r
  label: "Services Layer"\r
}\r
JobMonitoringBotHandlersLayer: {\r
  label: "Handlers Layer"\r
}\r
JobMonitoringBotUtilitiesLayer: {\r
  label: "Utilities Layer"\r
\r
  Utilities: {\r
    label: "Utilities"\r
  }\r
}\r
\r
JobMonitoringBotApplicationLayer -> JobMonitoringBotUtilitiesLayer.Utilities: "Configures application logging"\r
JobMonitoringBotServicesLayer -> JobMonitoringBotUtilitiesLayer.Utilities: "[...]"\r
JobMonitoringBotHandlersLayer -> JobMonitoringBotUtilitiesLayer.Utilities: "Logs command errors"\r
`;case"botCore":return`direction: down\r
\r
JobMonitoringBotApplicationLayerMainApp: {\r
  label: "Main Application"\r
}\r
JobMonitoringBotApplicationLayerBotCore: {\r
  label: "Bot Core"\r
\r
  BotModule: {\r
    label: "bot.py"\r
  }\r
}\r
JobMonitoringBotServicesLayer: {\r
  label: "Services Layer"\r
}\r
\r
JobMonitoringBotApplicationLayerMainApp -> JobMonitoringBotApplicationLayerBotCore.BotModule: "[...]"\r
JobMonitoringBotApplicationLayerBotCore.BotModule -> JobMonitoringBotServicesLayer: "[...]"\r
`;case"configuration":return`direction: down\r
\r
JobMonitoringBotServicesLayer: {\r
  label: "Services Layer"\r
}\r
JobMonitoringBotConfigurationLayerConfiguration: {\r
  label: "Configuration"\r
\r
  SettingsModule: {\r
    label: "Settings Module"\r
  }\r
}\r
\r
JobMonitoringBotServicesLayer -> JobMonitoringBotConfigurationLayerConfiguration.SettingsModule: "[...]"\r
`;case"dataStorage":return`direction: down\r
\r
JobMonitoringBotDataLayerDataStorage: {\r
  label: "Data Storage"\r
\r
  ForwardedMessages: {\r
    label: "Forwarded Messages Store"\r
  }\r
  BotState: {\r
    label: "Bot State Store"\r
  }\r
  ConfigCache: {\r
    label: "Config Cache"\r
  }\r
  Logs: {\r
    label: "Log Files"\r
  }\r
}\r
`;case"handlers":return`direction: down\r
\r
JobMonitoringBotHandlersLayerHandlers: {\r
  label: "Command Handlers"\r
\r
  CommandsHandler: {\r
    label: "Commands Handler"\r
  }\r
  MessageHandler: {\r
    label: "Message Handler"\r
  }\r
}\r
JobMonitoringBotUtilitiesLayer: {\r
  label: "Utilities Layer"\r
}\r
JobMonitoringBotServicesLayer: {\r
  label: "Services Layer"\r
}\r
\r
JobMonitoringBotHandlersLayerHandlers.CommandsHandler -> JobMonitoringBotServicesLayer: "Delegates to bot handler"\r
JobMonitoringBotHandlersLayerHandlers.CommandsHandler -> JobMonitoringBotUtilitiesLayer: "Logs command errors"\r
JobMonitoringBotHandlersLayerHandlers.MessageHandler -> JobMonitoringBotServicesLayer: "[...]"\r
`;case"mainApp":return`direction: down\r
\r
JobMonitoringBotApplicationLayerMainApp: {\r
  label: "Main Application"\r
\r
  MainModule: {\r
    label: "main.py"\r
  }\r
}\r
JobMonitoringBotUtilitiesLayer: {\r
  label: "Utilities Layer"\r
}\r
JobMonitoringBotApplicationLayerBotCore: {\r
  label: "Bot Core"\r
}\r
\r
JobMonitoringBotApplicationLayerMainApp.MainModule -> JobMonitoringBotUtilitiesLayer: "Configures application logging"\r
JobMonitoringBotApplicationLayerMainApp.MainModule -> JobMonitoringBotApplicationLayerBotCore: "[...]"\r
`;case"services":return`direction: down\r
\r
JobMonitoringBotApplicationLayer: {\r
  label: "Application Layer"\r
}\r
JobMonitoringBotHandlersLayer: {\r
  label: "Handlers Layer"\r
}\r
JobMonitoringBotServicesLayerServices: {\r
  label: "Services"\r
\r
  BotHandler: {\r
    label: "Bot Handler"\r
  }\r
  TelegramService: {\r
    label: "Telegram Service"\r
  }\r
  MessageProcessor: {\r
    label: "Message Processor"\r
  }\r
  PersistentStorage: {\r
    label: "Persistent Storage"\r
  }\r
}\r
JobMonitoringBotConfigurationLayer: {\r
  label: "Configuration Layer"\r
}\r
JobMonitoringBotUtilitiesLayer: {\r
  label: "Utilities Layer"\r
}\r
\r
JobMonitoringBotApplicationLayer -> JobMonitoringBotServicesLayerServices.TelegramService: "[...]"\r
JobMonitoringBotHandlersLayer -> JobMonitoringBotServicesLayerServices.TelegramService: "[...]"\r
JobMonitoringBotHandlersLayer -> JobMonitoringBotServicesLayerServices.BotHandler: "Delegates to bot handler"\r
JobMonitoringBotServicesLayerServices.TelegramService -> JobMonitoringBotServicesLayerServices.MessageProcessor: "[...]"\r
JobMonitoringBotServicesLayerServices.TelegramService -> JobMonitoringBotServicesLayerServices.PersistentStorage: "[...]"\r
JobMonitoringBotServicesLayerServices.BotHandler -> JobMonitoringBotServicesLayerServices.TelegramService: "Retrieves current statistics"\r
JobMonitoringBotServicesLayerServices.BotHandler -> JobMonitoringBotServicesLayerServices.PersistentStorage: "[...]"\r
JobMonitoringBotServicesLayerServices.TelegramService -> JobMonitoringBotConfigurationLayer: "[...]"\r
JobMonitoringBotServicesLayerServices.TelegramService -> JobMonitoringBotUtilitiesLayer: "Logs message events"\r
JobMonitoringBotServicesLayerServices.MessageProcessor -> JobMonitoringBotConfigurationLayer: "Uses keyword filtering rules"\r
JobMonitoringBotServicesLayerServices.BotHandler -> JobMonitoringBotUtilitiesLayer: "Uses formatting utilities"\r
JobMonitoringBotServicesLayerServices.PersistentStorage -> JobMonitoringBotUtilitiesLayer: "Uses timestamp utilities"\r
`;case"utilities":return`direction: down\r
\r
JobMonitoringBotApplicationLayer: {\r
  label: "Application Layer"\r
}\r
JobMonitoringBotServicesLayer: {\r
  label: "Services Layer"\r
}\r
JobMonitoringBotHandlersLayer: {\r
  label: "Handlers Layer"\r
}\r
JobMonitoringBotUtilitiesLayerUtilities: {\r
  label: "Utilities"\r
\r
  LoggingModule: {\r
    label: "Logging"\r
  }\r
  HelpersModule: {\r
    label: "Helpers"\r
  }\r
}\r
\r
JobMonitoringBotApplicationLayer -> JobMonitoringBotUtilitiesLayerUtilities.LoggingModule: "Configures application logging"\r
JobMonitoringBotServicesLayer -> JobMonitoringBotUtilitiesLayerUtilities.HelpersModule: "[...]"\r
JobMonitoringBotServicesLayer -> JobMonitoringBotUtilitiesLayerUtilities.LoggingModule: "Logs message events"\r
JobMonitoringBotHandlersLayer -> JobMonitoringBotUtilitiesLayerUtilities.LoggingModule: "Logs command errors"\r
`;case"botHandler":return`direction: down\r
\r
JobMonitoringBotHandlersLayer: {\r
  label: "Handlers Layer"\r
}\r
JobMonitoringBotServicesLayerServicesBotHandler: {\r
  label: "Bot Handler"\r
\r
  BotHandlerClass: {\r
    label: "BotHandler"\r
  }\r
}\r
JobMonitoringBotUtilitiesLayer: {\r
  label: "Utilities Layer"\r
}\r
JobMonitoringBotServicesLayerServicesTelegramService: {\r
  label: "Telegram Service"\r
}\r
JobMonitoringBotServicesLayerServicesPersistentStorage: {\r
  label: "Persistent Storage"\r
}\r
\r
JobMonitoringBotHandlersLayer -> JobMonitoringBotServicesLayerServicesBotHandler.BotHandlerClass: "Delegates to bot handler"\r
JobMonitoringBotServicesLayerServicesBotHandler.BotHandlerClass -> JobMonitoringBotUtilitiesLayer: "Uses formatting utilities"\r
JobMonitoringBotServicesLayerServicesBotHandler.BotHandlerClass -> JobMonitoringBotServicesLayerServicesTelegramService: "Retrieves current statistics"\r
JobMonitoringBotServicesLayerServicesBotHandler.BotHandlerClass -> JobMonitoringBotServicesLayerServicesPersistentStorage: "[...]"\r
`;case"commandsHandler":return`direction: down\r
\r
JobMonitoringBotHandlersLayerHandlersCommandsHandler: {\r
  label: "Commands Handler"\r
\r
  CommandsModule: {\r
    label: "commands.py"\r
  }\r
}\r
JobMonitoringBotServicesLayer: {\r
  label: "Services Layer"\r
}\r
JobMonitoringBotUtilitiesLayer: {\r
  label: "Utilities Layer"\r
}\r
\r
JobMonitoringBotHandlersLayerHandlersCommandsHandler.CommandsModule -> JobMonitoringBotServicesLayer: "Delegates to bot handler"\r
JobMonitoringBotHandlersLayerHandlersCommandsHandler.CommandsModule -> JobMonitoringBotUtilitiesLayer: "Logs command errors"\r
`;case"messageHandler":return`direction: down\r
\r
JobMonitoringBotHandlersLayerHandlersMessageHandler: {\r
  label: "Message Handler"\r
\r
  MessagesModule: {\r
    label: "messages.py"\r
  }\r
}\r
JobMonitoringBotServicesLayer: {\r
  label: "Services Layer"\r
}\r
\r
JobMonitoringBotHandlersLayerHandlersMessageHandler.MessagesModule -> JobMonitoringBotServicesLayer: "[...]"\r
`;case"messageProcessor":return`direction: down\r
\r
JobMonitoringBotServicesLayerServicesTelegramService: {\r
  label: "Telegram Service"\r
}\r
JobMonitoringBotServicesLayerServicesMessageProcessor: {\r
  label: "Message Processor"\r
\r
  MessageProcessorClass: {\r
    label: "MessageProcessor"\r
  }\r
}\r
JobMonitoringBotConfigurationLayer: {\r
  label: "Configuration Layer"\r
}\r
\r
JobMonitoringBotServicesLayerServicesTelegramService -> JobMonitoringBotServicesLayerServicesMessageProcessor.MessageProcessorClass: "[...]"\r
JobMonitoringBotServicesLayerServicesMessageProcessor.MessageProcessorClass -> JobMonitoringBotConfigurationLayer: "Uses keyword filtering rules"\r
`;case"persistentStorage":return`direction: down\r
\r
JobMonitoringBotServicesLayerServicesTelegramService: {\r
  label: "Telegram Service"\r
}\r
JobMonitoringBotServicesLayerServicesBotHandler: {\r
  label: "Bot Handler"\r
}\r
JobMonitoringBotServicesLayerServicesPersistentStorage: {\r
  label: "Persistent Storage"\r
\r
  PersistentStorageClass: {\r
    label: "PersistentStorage"\r
  }\r
}\r
JobMonitoringBotUtilitiesLayer: {\r
  label: "Utilities Layer"\r
}\r
\r
JobMonitoringBotServicesLayerServicesTelegramService -> JobMonitoringBotServicesLayerServicesPersistentStorage.PersistentStorageClass: "[...]"\r
JobMonitoringBotServicesLayerServicesBotHandler -> JobMonitoringBotServicesLayerServicesPersistentStorage.PersistentStorageClass: "[...]"\r
JobMonitoringBotServicesLayerServicesPersistentStorage.PersistentStorageClass -> JobMonitoringBotUtilitiesLayer: "Uses timestamp utilities"\r
`;case"telegramService":return`direction: down\r
\r
JobMonitoringBotApplicationLayer: {\r
  label: "Application Layer"\r
}\r
JobMonitoringBotHandlersLayer: {\r
  label: "Handlers Layer"\r
}\r
JobMonitoringBotServicesLayerServicesBotHandler: {\r
  label: "Bot Handler"\r
}\r
JobMonitoringBotServicesLayerServicesTelegramService: {\r
  label: "Telegram Service"\r
\r
  TelegramServiceClass: {\r
    label: "TelegramService"\r
  }\r
}\r
JobMonitoringBotConfigurationLayer: {\r
  label: "Configuration Layer"\r
}\r
JobMonitoringBotUtilitiesLayer: {\r
  label: "Utilities Layer"\r
}\r
JobMonitoringBotServicesLayerServicesMessageProcessor: {\r
  label: "Message Processor"\r
}\r
JobMonitoringBotServicesLayerServicesPersistentStorage: {\r
  label: "Persistent Storage"\r
}\r
\r
JobMonitoringBotApplicationLayer -> JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass: "[...]"\r
JobMonitoringBotHandlersLayer -> JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass: "[...]"\r
JobMonitoringBotServicesLayerServicesBotHandler -> JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass: "Retrieves current statistics"\r
JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass -> JobMonitoringBotConfigurationLayer: "[...]"\r
JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass -> JobMonitoringBotUtilitiesLayer: "Logs message events"\r
JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass -> JobMonitoringBotServicesLayerServicesMessageProcessor: "[...]"\r
JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass -> JobMonitoringBotServicesLayerServicesPersistentStorage: "[...]"\r
`;case"navigation":return`direction: down\r
\r
`;default:throw new Error("Unknown viewId: "+r)}}export{e as d2Source};
