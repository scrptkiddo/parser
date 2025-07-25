function r(e){switch(e){case"commandFlow":return`---\r
title: "Command Flow - User Interaction Pipeline"\r
---\r
graph LR\r
  BotUser[fa:fa-user Bot User]\r
  subgraph JobMonitoringBotHandlersLayer["Handlers Layer"]\r
    JobMonitoringBotHandlersLayer.HandlersCommandsHandlerCommandsModuleStartHandler[start_command_handler()]\r
    JobMonitoringBotHandlersLayer.HandlersCommandsHandlerCommandsModuleStatusHandler[status_command_handler()]\r
    JobMonitoringBotHandlersLayer.HandlersCommandsHandlerCommandsModuleStatsHandler[stats_command_handler()]\r
    JobMonitoringBotHandlersLayer.HandlersCommandsHandlerCommandsModuleHelpHandler[help_command_handler()]\r
  end\r
  subgraph JobMonitoringBotServicesLayer["Services Layer"]\r
    subgraph JobMonitoringBotServicesLayer.ServicesBotHandler["Bot Handler"]\r
      subgraph JobMonitoringBotServicesLayer.ServicesBotHandler.BotHandlerClass["BotHandler"]\r
        JobMonitoringBotServicesLayer.ServicesBotHandler.BotHandlerClass.StartCommand[handle_start_command()]\r
        JobMonitoringBotServicesLayer.ServicesBotHandler.BotHandlerClass.StatusCommand[handle_status_command()]\r
        JobMonitoringBotServicesLayer.ServicesBotHandler.BotHandlerClass.StatsCommand[handle_stats_command()]\r
        JobMonitoringBotServicesLayer.ServicesBotHandler.BotHandlerClass.HelpCommand[handle_help_command()]\r
        JobMonitoringBotServicesLayer.ServicesBotHandler.BotHandlerClass.UpdateStats[update_statistics()]\r
        JobMonitoringBotServicesLayer.ServicesBotHandler.BotHandlerClass.FormatStats[format_statistics()]\r
      end\r
    end\r
    subgraph JobMonitoringBotServicesLayer.ServicesTelegramService["Telegram Service"]\r
      JobMonitoringBotServicesLayer.ServicesTelegramService.TelegramServiceClassGetStats[get_statistics()]\r
    end\r
  end\r
  JobMonitoringBotHandlersLayer.HandlersCommandsHandlerCommandsModuleStartHandler -. "Delegates to bot handler" .-> JobMonitoringBotServicesLayer.ServicesBotHandler.BotHandlerClass.StartCommand\r
  JobMonitoringBotHandlersLayer.HandlersCommandsHandlerCommandsModuleStatusHandler -. "Delegates to bot handler" .-> JobMonitoringBotServicesLayer.ServicesBotHandler.BotHandlerClass.StatusCommand\r
  JobMonitoringBotHandlersLayer.HandlersCommandsHandlerCommandsModuleStatsHandler -. "Delegates to bot handler" .-> JobMonitoringBotServicesLayer.ServicesBotHandler.BotHandlerClass.StatsCommand\r
  JobMonitoringBotHandlersLayer.HandlersCommandsHandlerCommandsModuleHelpHandler -. "Delegates to bot handler" .-> JobMonitoringBotServicesLayer.ServicesBotHandler.BotHandlerClass.HelpCommand\r
  JobMonitoringBotServicesLayer.ServicesBotHandler.BotHandlerClass.StartCommand -. "Updates usage statistics" .-> JobMonitoringBotServicesLayer.ServicesBotHandler.BotHandlerClass.UpdateStats\r
  JobMonitoringBotServicesLayer.ServicesBotHandler.BotHandlerClass.StatusCommand -. "Retrieves current statistics" .-> JobMonitoringBotServicesLayer.ServicesTelegramService.TelegramServiceClassGetStats\r
  JobMonitoringBotServicesLayer.ServicesBotHandler.BotHandlerClass.StatsCommand -. "Formats statistics for display" .-> JobMonitoringBotServicesLayer.ServicesBotHandler.BotHandlerClass.FormatStats\r
`;case"dataFlow":return`---\r
title: "Data Flow - Message Processing Pipeline"\r
---\r
graph LR\r
  BotUser[fa:fa-user Bot User]\r
  SourceChannels[Source Channels]\r
  TargetChat[Target Chat]\r
  subgraph JobMonitoringBotServicesLayerServicesTelegramService["Telegram Service"]\r
    subgraph JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass["TelegramService"]\r
      JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass.ProcessMessage[process_new_message()]\r
      JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass.ForwardMessage[forward_message()]\r
    end\r
  end\r
  subgraph JobMonitoringBotServicesLayerServicesMessageProcessor["Message Processor"]\r
    subgraph JobMonitoringBotServicesLayerServicesMessageProcessor.MessageProcessorClass["MessageProcessor"]\r
      JobMonitoringBotServicesLayerServicesMessageProcessor.MessageProcessorClass.ShouldForward[should_forward_message()]\r
      JobMonitoringBotServicesLayerServicesMessageProcessor.MessageProcessorClass.ExtractJobInfo[extract_job_info()]\r
      JobMonitoringBotServicesLayerServicesMessageProcessor.MessageProcessorClass.ContainsKeywords[contains_keywords()]\r
      JobMonitoringBotServicesLayerServicesMessageProcessor.MessageProcessorClass.ContainsExclusions[contains_exclusion_words()]\r
      JobMonitoringBotServicesLayerServicesMessageProcessor.MessageProcessorClass.ValidateMessage[validate_message_format()]\r
    end\r
  end\r
  subgraph JobMonitoringBotServicesLayerServicesPersistentStorage["Persistent Storage"]\r
    JobMonitoringBotServicesLayerServicesPersistentStorage.PersistentStorageClassIsForwarded[is_message_forwarded()]\r
    JobMonitoringBotServicesLayerServicesPersistentStorage.PersistentStorageClassAddForwarded[add_forwarded_message()]\r
    JobMonitoringBotServicesLayerServicesPersistentStorage.PersistentStorageClassCleanupOld[cleanup_old_entries()]\r
  end\r
  JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass.ProcessMessage -. "Checks if message should be forwarded" .-> JobMonitoringBotServicesLayerServicesMessageProcessor.MessageProcessorClass.ShouldForward\r
  JobMonitoringBotServicesLayerServicesMessageProcessor.MessageProcessorClass.ShouldForward -. "Validates required keywords" .-> JobMonitoringBotServicesLayerServicesMessageProcessor.MessageProcessorClass.ContainsKeywords\r
  JobMonitoringBotServicesLayerServicesMessageProcessor.MessageProcessorClass.ShouldForward -. "Checks exclusion words" .-> JobMonitoringBotServicesLayerServicesMessageProcessor.MessageProcessorClass.ContainsExclusions\r
  JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass.ProcessMessage -. "Checks if already forwarded" .-> JobMonitoringBotServicesLayerServicesPersistentStorage.PersistentStorageClassIsForwarded\r
  JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass.ProcessMessage -. "Forwards approved messages" .-> JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass.ForwardMessage\r
  JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass.ForwardMessage -. "Records forwarded message" .-> JobMonitoringBotServicesLayerServicesPersistentStorage.PersistentStorageClassAddForwarded\r
  JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass.ProcessMessage -. "Extracts job information" .-> JobMonitoringBotServicesLayerServicesMessageProcessor.MessageProcessorClass.ExtractJobInfo\r
  JobMonitoringBotServicesLayerServicesMessageProcessor.MessageProcessorClass.ExtractJobInfo -. "Validates extracted data" .-> JobMonitoringBotServicesLayerServicesMessageProcessor.MessageProcessorClass.ValidateMessage\r
  JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass.ProcessMessage -. "Cleans up old entries" .-> JobMonitoringBotServicesLayerServicesPersistentStorage.PersistentStorageClassCleanupOld\r
`;case"index":return`---\r
title: "L0: System Context - Job Monitoring Bot"\r
---\r
graph TB\r
  BotUser[fa:fa-user Bot User]\r
  JobMonitoringBot[Job Monitoring Bot]\r
  TelegramPlatform[Telegram Platform]\r
  SourceChannels[Source Channels]\r
  TargetChat[Target Chat]\r
  BotUser -. "Uses bot commands" .-> JobMonitoringBot\r
  JobMonitoringBot -. "Connects via API" .-> TelegramPlatform\r
  JobMonitoringBot -. "Monitors for new messages" .-> SourceChannels\r
  JobMonitoringBot -. "Forwards filtered messages" .-> TargetChat\r
`;case"jobMonitoringBot":return`---\r
title: "L1: System Architecture - Architectural Layers"\r
---\r
graph TB\r
  subgraph JobMonitoringBot["Job Monitoring Bot"]\r
    JobMonitoringBot.ApplicationLayer[Application Layer]\r
    JobMonitoringBot.HandlersLayer[Handlers Layer]\r
    JobMonitoringBot.ServicesLayer[Services Layer]\r
    JobMonitoringBot.ConfigurationLayer[Configuration Layer]\r
    JobMonitoringBot.UtilitiesLayer[Utilities Layer]\r
    JobMonitoringBot.DataLayer[Data Storage Layer]\r
  end\r
  JobMonitoringBot.ApplicationLayer -. "[...]" .-> JobMonitoringBot.ServicesLayer\r
  JobMonitoringBot.ApplicationLayer -. "Configures application logging" .-> JobMonitoringBot.UtilitiesLayer\r
  JobMonitoringBot.ServicesLayer -. "[...]" .-> JobMonitoringBot.ConfigurationLayer\r
  JobMonitoringBot.ServicesLayer -. "[...]" .-> JobMonitoringBot.UtilitiesLayer\r
  JobMonitoringBot.HandlersLayer -. "[...]" .-> JobMonitoringBot.ServicesLayer\r
  JobMonitoringBot.HandlersLayer -. "Logs command errors" .-> JobMonitoringBot.UtilitiesLayer\r
`;case"applicationLayer":return`---\r
title: "L2: Application Layer - Entry Point & Orchestration"\r
---\r
graph TB\r
  subgraph JobMonitoringBotApplicationLayer["Application Layer"]\r
    JobMonitoringBotApplicationLayer.MainApp[Main Application]\r
    JobMonitoringBotApplicationLayer.BotCore[Bot Core]\r
  end\r
  JobMonitoringBotUtilitiesLayer[Utilities Layer]\r
  JobMonitoringBotServicesLayer[Services Layer]\r
  JobMonitoringBotApplicationLayer.MainApp -. "[...]" .-> JobMonitoringBotApplicationLayer.BotCore\r
  JobMonitoringBotApplicationLayer.MainApp -. "Configures application logging" .-> JobMonitoringBotUtilitiesLayer\r
  JobMonitoringBotApplicationLayer.BotCore -. "[...]" .-> JobMonitoringBotServicesLayer\r
`;case"configurationLayer":return`---\r
title: "L2: Configuration Layer - Settings Management"\r
---\r
graph TB\r
  JobMonitoringBotServicesLayer[Services Layer]\r
  subgraph JobMonitoringBotConfigurationLayer["Configuration Layer"]\r
    JobMonitoringBotConfigurationLayer.Configuration[Configuration]\r
  end\r
  JobMonitoringBotServicesLayer -. "[...]" .-> JobMonitoringBotConfigurationLayer.Configuration\r
`;case"dataLayer":return`---\r
title: "L2: Data Storage Layer - Persistence"\r
---\r
graph TB\r
  subgraph JobMonitoringBotDataLayer["Data Storage Layer"]\r
    JobMonitoringBotDataLayer.DataStorage[Data Storage]\r
  end\r
`;case"handlersLayer":return`---\r
title: "L2: Handlers Layer - User Interaction"\r
---\r
graph TB\r
  subgraph JobMonitoringBotHandlersLayer["Handlers Layer"]\r
    JobMonitoringBotHandlersLayer.Handlers[Command Handlers]\r
  end\r
  JobMonitoringBotServicesLayer[Services Layer]\r
  JobMonitoringBotUtilitiesLayer[Utilities Layer]\r
  JobMonitoringBotHandlersLayer.Handlers -. "[...]" .-> JobMonitoringBotServicesLayer\r
  JobMonitoringBotHandlersLayer.Handlers -. "Logs command errors" .-> JobMonitoringBotUtilitiesLayer\r
`;case"servicesLayer":return`---\r
title: "L2: Services Layer - Core Business Logic"\r
---\r
graph TB\r
  JobMonitoringBotApplicationLayer[Application Layer]\r
  JobMonitoringBotHandlersLayer[Handlers Layer]\r
  subgraph JobMonitoringBotServicesLayer["Services Layer"]\r
    JobMonitoringBotServicesLayer.Services[Services]\r
  end\r
  JobMonitoringBotConfigurationLayer[Configuration Layer]\r
  JobMonitoringBotUtilitiesLayer[Utilities Layer]\r
  JobMonitoringBotApplicationLayer -. "[...]" .-> JobMonitoringBotServicesLayer.Services\r
  JobMonitoringBotHandlersLayer -. "[...]" .-> JobMonitoringBotServicesLayer.Services\r
  JobMonitoringBotServicesLayer.Services -. "[...]" .-> JobMonitoringBotConfigurationLayer\r
  JobMonitoringBotServicesLayer.Services -. "[...]" .-> JobMonitoringBotUtilitiesLayer\r
`;case"utilitiesLayer":return`---\r
title: "L2: Utilities Layer - Helper Functions"\r
---\r
graph TB\r
  JobMonitoringBotApplicationLayer[Application Layer]\r
  JobMonitoringBotServicesLayer[Services Layer]\r
  JobMonitoringBotHandlersLayer[Handlers Layer]\r
  subgraph JobMonitoringBotUtilitiesLayer["Utilities Layer"]\r
    JobMonitoringBotUtilitiesLayer.Utilities[Utilities]\r
  end\r
  JobMonitoringBotApplicationLayer -. "Configures application logging" .-> JobMonitoringBotUtilitiesLayer.Utilities\r
  JobMonitoringBotServicesLayer -. "[...]" .-> JobMonitoringBotUtilitiesLayer.Utilities\r
  JobMonitoringBotHandlersLayer -. "Logs command errors" .-> JobMonitoringBotUtilitiesLayer.Utilities\r
`;case"botCore":return`---\r
title: "L3: Bot Core Container - Coordination Logic"\r
---\r
graph TB\r
  JobMonitoringBotApplicationLayerMainApp[Main Application]\r
  subgraph JobMonitoringBotApplicationLayerBotCore["Bot Core"]\r
    JobMonitoringBotApplicationLayerBotCore.BotModule[bot.py]\r
  end\r
  JobMonitoringBotServicesLayer[Services Layer]\r
  JobMonitoringBotApplicationLayerMainApp -. "[...]" .-> JobMonitoringBotApplicationLayerBotCore.BotModule\r
  JobMonitoringBotApplicationLayerBotCore.BotModule -. "[...]" .-> JobMonitoringBotServicesLayer\r
`;case"configuration":return`---\r
title: "L3: Configuration Container - Settings Management"\r
---\r
graph TB\r
  JobMonitoringBotServicesLayer[Services Layer]\r
  subgraph JobMonitoringBotConfigurationLayerConfiguration["Configuration"]\r
    JobMonitoringBotConfigurationLayerConfiguration.SettingsModule[Settings Module]\r
  end\r
  JobMonitoringBotServicesLayer -. "[...]" .-> JobMonitoringBotConfigurationLayerConfiguration.SettingsModule\r
`;case"dataStorage":return`---\r
title: "L3: Data Storage Container - Persistence Components"\r
---\r
graph TB\r
  subgraph JobMonitoringBotDataLayerDataStorage["Data Storage"]\r
    JobMonitoringBotDataLayerDataStorage.ForwardedMessages[Forwarded Messages Store]\r
    JobMonitoringBotDataLayerDataStorage.BotState[Bot State Store]\r
    JobMonitoringBotDataLayerDataStorage.ConfigCache[Config Cache]\r
    JobMonitoringBotDataLayerDataStorage.Logs[Log Files]\r
  end\r
`;case"handlers":return`---\r
title: "L3: Handlers Container - User Interaction Workers"\r
---\r
graph TB\r
  subgraph JobMonitoringBotHandlersLayerHandlers["Command Handlers"]\r
    JobMonitoringBotHandlersLayerHandlers.CommandsHandler[Commands Handler]\r
    JobMonitoringBotHandlersLayerHandlers.MessageHandler[Message Handler]\r
  end\r
  JobMonitoringBotUtilitiesLayer[Utilities Layer]\r
  JobMonitoringBotServicesLayer[Services Layer]\r
  JobMonitoringBotHandlersLayerHandlers.CommandsHandler -. "Delegates to bot handler" .-> JobMonitoringBotServicesLayer\r
  JobMonitoringBotHandlersLayerHandlers.CommandsHandler -. "Logs command errors" .-> JobMonitoringBotUtilitiesLayer\r
  JobMonitoringBotHandlersLayerHandlers.MessageHandler -. "[...]" .-> JobMonitoringBotServicesLayer\r
`;case"mainApp":return`---\r
title: "L3: Main Application Container - Entry Point Details"\r
---\r
graph TB\r
  subgraph JobMonitoringBotApplicationLayerMainApp["Main Application"]\r
    JobMonitoringBotApplicationLayerMainApp.MainModule[main.py]\r
  end\r
  JobMonitoringBotUtilitiesLayer[Utilities Layer]\r
  JobMonitoringBotApplicationLayerBotCore[Bot Core]\r
  JobMonitoringBotApplicationLayerMainApp.MainModule -. "Configures application logging" .-> JobMonitoringBotUtilitiesLayer\r
  JobMonitoringBotApplicationLayerMainApp.MainModule -. "[...]" .-> JobMonitoringBotApplicationLayerBotCore\r
`;case"services":return`---\r
title: "L3: Services Container - Business Logic Workers"\r
---\r
graph TB\r
  JobMonitoringBotApplicationLayer[Application Layer]\r
  JobMonitoringBotHandlersLayer[Handlers Layer]\r
  subgraph JobMonitoringBotServicesLayerServices["Services"]\r
    JobMonitoringBotServicesLayerServices.BotHandler[Bot Handler]\r
    JobMonitoringBotServicesLayerServices.TelegramService[Telegram Service]\r
    JobMonitoringBotServicesLayerServices.MessageProcessor[Message Processor]\r
    JobMonitoringBotServicesLayerServices.PersistentStorage[Persistent Storage]\r
  end\r
  JobMonitoringBotConfigurationLayer[Configuration Layer]\r
  JobMonitoringBotUtilitiesLayer[Utilities Layer]\r
  JobMonitoringBotApplicationLayer -. "[...]" .-> JobMonitoringBotServicesLayerServices.TelegramService\r
  JobMonitoringBotHandlersLayer -. "[...]" .-> JobMonitoringBotServicesLayerServices.TelegramService\r
  JobMonitoringBotHandlersLayer -. "Delegates to bot handler" .-> JobMonitoringBotServicesLayerServices.BotHandler\r
  JobMonitoringBotServicesLayerServices.TelegramService -. "[...]" .-> JobMonitoringBotServicesLayerServices.MessageProcessor\r
  JobMonitoringBotServicesLayerServices.TelegramService -. "[...]" .-> JobMonitoringBotServicesLayerServices.PersistentStorage\r
  JobMonitoringBotServicesLayerServices.BotHandler -. "Retrieves current statistics" .-> JobMonitoringBotServicesLayerServices.TelegramService\r
  JobMonitoringBotServicesLayerServices.BotHandler -. "[...]" .-> JobMonitoringBotServicesLayerServices.PersistentStorage\r
  JobMonitoringBotServicesLayerServices.TelegramService -. "[...]" .-> JobMonitoringBotConfigurationLayer\r
  JobMonitoringBotServicesLayerServices.TelegramService -. "Logs message events" .-> JobMonitoringBotUtilitiesLayer\r
  JobMonitoringBotServicesLayerServices.MessageProcessor -. "Uses keyword filtering rules" .-> JobMonitoringBotConfigurationLayer\r
  JobMonitoringBotServicesLayerServices.BotHandler -. "Uses formatting utilities" .-> JobMonitoringBotUtilitiesLayer\r
  JobMonitoringBotServicesLayerServices.PersistentStorage -. "Uses timestamp utilities" .-> JobMonitoringBotUtilitiesLayer\r
`;case"utilities":return`---\r
title: "L3: Utilities Container - Helper Functions"\r
---\r
graph TB\r
  JobMonitoringBotApplicationLayer[Application Layer]\r
  JobMonitoringBotServicesLayer[Services Layer]\r
  JobMonitoringBotHandlersLayer[Handlers Layer]\r
  subgraph JobMonitoringBotUtilitiesLayerUtilities["Utilities"]\r
    JobMonitoringBotUtilitiesLayerUtilities.LoggingModule[Logging]\r
    JobMonitoringBotUtilitiesLayerUtilities.HelpersModule[Helpers]\r
  end\r
  JobMonitoringBotApplicationLayer -. "Configures application logging" .-> JobMonitoringBotUtilitiesLayerUtilities.LoggingModule\r
  JobMonitoringBotServicesLayer -. "[...]" .-> JobMonitoringBotUtilitiesLayerUtilities.HelpersModule\r
  JobMonitoringBotServicesLayer -. "Logs message events" .-> JobMonitoringBotUtilitiesLayerUtilities.LoggingModule\r
  JobMonitoringBotHandlersLayer -. "Logs command errors" .-> JobMonitoringBotUtilitiesLayerUtilities.LoggingModule\r
`;case"botHandler":return`---\r
title: "L4: Bot Handler Worker - Command Processing"\r
---\r
graph TB\r
  JobMonitoringBotHandlersLayer[Handlers Layer]\r
  subgraph JobMonitoringBotServicesLayerServicesBotHandler["Bot Handler"]\r
    JobMonitoringBotServicesLayerServicesBotHandler.BotHandlerClass[BotHandler]\r
  end\r
  JobMonitoringBotUtilitiesLayer[Utilities Layer]\r
  JobMonitoringBotServicesLayerServicesTelegramService[Telegram Service]\r
  JobMonitoringBotServicesLayerServicesPersistentStorage[Persistent Storage]\r
  JobMonitoringBotHandlersLayer -. "Delegates to bot handler" .-> JobMonitoringBotServicesLayerServicesBotHandler.BotHandlerClass\r
  JobMonitoringBotServicesLayerServicesBotHandler.BotHandlerClass -. "Uses formatting utilities" .-> JobMonitoringBotUtilitiesLayer\r
  JobMonitoringBotServicesLayerServicesBotHandler.BotHandlerClass -. "Retrieves current statistics" .-> JobMonitoringBotServicesLayerServicesTelegramService\r
  JobMonitoringBotServicesLayerServicesBotHandler.BotHandlerClass -. "[...]" .-> JobMonitoringBotServicesLayerServicesPersistentStorage\r
`;case"commandsHandler":return`---\r
title: "L4: Commands Handler Worker - Command Interface"\r
---\r
graph TB\r
  subgraph JobMonitoringBotHandlersLayerHandlersCommandsHandler["Commands Handler"]\r
    JobMonitoringBotHandlersLayerHandlersCommandsHandler.CommandsModule[commands.py]\r
  end\r
  JobMonitoringBotServicesLayer[Services Layer]\r
  JobMonitoringBotUtilitiesLayer[Utilities Layer]\r
  JobMonitoringBotHandlersLayerHandlersCommandsHandler.CommandsModule -. "Delegates to bot handler" .-> JobMonitoringBotServicesLayer\r
  JobMonitoringBotHandlersLayerHandlersCommandsHandler.CommandsModule -. "Logs command errors" .-> JobMonitoringBotUtilitiesLayer\r
`;case"messageHandler":return`---\r
title: "L4: Message Handler Worker - Message Routing"\r
---\r
graph TB\r
  subgraph JobMonitoringBotHandlersLayerHandlersMessageHandler["Message Handler"]\r
    JobMonitoringBotHandlersLayerHandlersMessageHandler.MessagesModule[messages.py]\r
  end\r
  JobMonitoringBotServicesLayer[Services Layer]\r
  JobMonitoringBotHandlersLayerHandlersMessageHandler.MessagesModule -. "[...]" .-> JobMonitoringBotServicesLayer\r
`;case"messageProcessor":return`---\r
title: "L4: Message Processor Worker - Filtering Logic"\r
---\r
graph TB\r
  JobMonitoringBotServicesLayerServicesTelegramService[Telegram Service]\r
  subgraph JobMonitoringBotServicesLayerServicesMessageProcessor["Message Processor"]\r
    JobMonitoringBotServicesLayerServicesMessageProcessor.MessageProcessorClass[MessageProcessor]\r
  end\r
  JobMonitoringBotConfigurationLayer[Configuration Layer]\r
  JobMonitoringBotServicesLayerServicesTelegramService -. "[...]" .-> JobMonitoringBotServicesLayerServicesMessageProcessor.MessageProcessorClass\r
  JobMonitoringBotServicesLayerServicesMessageProcessor.MessageProcessorClass -. "Uses keyword filtering rules" .-> JobMonitoringBotConfigurationLayer\r
`;case"persistentStorage":return`---\r
title: "L4: Persistent Storage Worker - Data Management"\r
---\r
graph TB\r
  JobMonitoringBotServicesLayerServicesTelegramService[Telegram Service]\r
  JobMonitoringBotServicesLayerServicesBotHandler[Bot Handler]\r
  subgraph JobMonitoringBotServicesLayerServicesPersistentStorage["Persistent Storage"]\r
    JobMonitoringBotServicesLayerServicesPersistentStorage.PersistentStorageClass[PersistentStorage]\r
  end\r
  JobMonitoringBotUtilitiesLayer[Utilities Layer]\r
  JobMonitoringBotServicesLayerServicesTelegramService -. "[...]" .-> JobMonitoringBotServicesLayerServicesPersistentStorage.PersistentStorageClass\r
  JobMonitoringBotServicesLayerServicesBotHandler -. "[...]" .-> JobMonitoringBotServicesLayerServicesPersistentStorage.PersistentStorageClass\r
  JobMonitoringBotServicesLayerServicesPersistentStorage.PersistentStorageClass -. "Uses timestamp utilities" .-> JobMonitoringBotUtilitiesLayer\r
`;case"telegramService":return`---\r
title: "L4: Telegram Service Worker - Method Implementation"\r
---\r
graph TB\r
  JobMonitoringBotApplicationLayer[Application Layer]\r
  JobMonitoringBotHandlersLayer[Handlers Layer]\r
  JobMonitoringBotServicesLayerServicesBotHandler[Bot Handler]\r
  subgraph JobMonitoringBotServicesLayerServicesTelegramService["Telegram Service"]\r
    JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass[TelegramService]\r
  end\r
  JobMonitoringBotConfigurationLayer[Configuration Layer]\r
  JobMonitoringBotUtilitiesLayer[Utilities Layer]\r
  JobMonitoringBotServicesLayerServicesMessageProcessor[Message Processor]\r
  JobMonitoringBotServicesLayerServicesPersistentStorage[Persistent Storage]\r
  JobMonitoringBotApplicationLayer -. "[...]" .-> JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass\r
  JobMonitoringBotHandlersLayer -. "[...]" .-> JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass\r
  JobMonitoringBotServicesLayerServicesBotHandler -. "Retrieves current statistics" .-> JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass\r
  JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass -. "[...]" .-> JobMonitoringBotConfigurationLayer\r
  JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass -. "Logs message events" .-> JobMonitoringBotUtilitiesLayer\r
  JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass -. "[...]" .-> JobMonitoringBotServicesLayerServicesMessageProcessor\r
  JobMonitoringBotServicesLayerServicesTelegramService.TelegramServiceClass -. "[...]" .-> JobMonitoringBotServicesLayerServicesPersistentStorage\r
`;case"navigation":return`---\r
title: "Navigation Guide - Drill-Down Structure"\r
---\r
graph TB\r
`;default:throw new Error("Unknown viewId: "+e)}}export{r as mmdSource};
