function e(r){switch(r){case"commandFlow":return`@startuml\r
title "Command Flow - User Interaction Pipeline"\r
left to right direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam person<<BotUser>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotHandlersLayerHandlersCommandsHandlerCommandsModuleStartHandler>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotHandlersLayerHandlersCommandsHandlerCommandsModuleStatusHandler>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotHandlersLayerHandlersCommandsHandlerCommandsModuleStatsHandler>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotHandlersLayerHandlersCommandsHandlerCommandsModuleHelpHandler>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClassStartCommand>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClassStatusCommand>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClassStatsCommand>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClassHelpCommand>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClassUpdateStats>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClassFormatStats>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClassGetStats>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
person "==Bot User\\n\\nUsers interacting with the bot via Telegram commands" <<BotUser>> as BotUser\r
rectangle "Handlers Layer" <<JobMonitoringBotHandlersLayer>> as JobMonitoringBotHandlersLayer {\r
  skinparam RectangleBorderColor<<JobMonitoringBotHandlersLayer>> #3b82f6\r
  skinparam RectangleFontColor<<JobMonitoringBotHandlersLayer>> #3b82f6\r
  skinparam RectangleBorderStyle<<JobMonitoringBotHandlersLayer>> dashed\r
\r
  rectangle "==start_command_handler()\\n\\nHandler for /start - delegates to BotHandler.handle_start_command" <<JobMonitoringBotHandlersLayerHandlersCommandsHandlerCommandsModuleStartHandler>> as JobMonitoringBotHandlersLayerHandlersCommandsHandlerCommandsModuleStartHandler\r
  rectangle "==status_command_handler()\\n\\nHandler for /status - delegates to BotHandler.handle_status_command" <<JobMonitoringBotHandlersLayerHandlersCommandsHandlerCommandsModuleStatusHandler>> as JobMonitoringBotHandlersLayerHandlersCommandsHandlerCommandsModuleStatusHandler\r
  rectangle "==stats_command_handler()\\n\\nHandler for /stats - delegates to BotHandler.handle_stats_command" <<JobMonitoringBotHandlersLayerHandlersCommandsHandlerCommandsModuleStatsHandler>> as JobMonitoringBotHandlersLayerHandlersCommandsHandlerCommandsModuleStatsHandler\r
  rectangle "==help_command_handler()\\n\\nHandler for /help - delegates to BotHandler.handle_help_command" <<JobMonitoringBotHandlersLayerHandlersCommandsHandlerCommandsModuleHelpHandler>> as JobMonitoringBotHandlersLayerHandlersCommandsHandlerCommandsModuleHelpHandler\r
}\r
rectangle "Services Layer" <<JobMonitoringBotServicesLayer>> as JobMonitoringBotServicesLayer {\r
  skinparam RectangleBorderColor<<JobMonitoringBotServicesLayer>> #3b82f6\r
  skinparam RectangleFontColor<<JobMonitoringBotServicesLayer>> #3b82f6\r
  skinparam RectangleBorderStyle<<JobMonitoringBotServicesLayer>> dashed\r
\r
  rectangle "Bot Handler" <<JobMonitoringBotServicesLayerServicesBotHandler>> as JobMonitoringBotServicesLayerServicesBotHandler {\r
    skinparam RectangleBorderColor<<JobMonitoringBotServicesLayerServicesBotHandler>> #3b82f6\r
    skinparam RectangleFontColor<<JobMonitoringBotServicesLayerServicesBotHandler>> #3b82f6\r
    skinparam RectangleBorderStyle<<JobMonitoringBotServicesLayerServicesBotHandler>> dashed\r
\r
    rectangle "BotHandler" <<JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClass>> as JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClass {\r
      skinparam RectangleBorderColor<<JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClass>> #3b82f6\r
      skinparam RectangleFontColor<<JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClass>> #3b82f6\r
      skinparam RectangleBorderStyle<<JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClass>> dashed\r
\r
      rectangle "==handle_start_command()\\n\\nHandle /start command - welcome message and instructions" <<JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClassStartCommand>> as JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClassStartCommand\r
      rectangle "==handle_status_command()\\n\\nHandle /status command - show bot operational status" <<JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClassStatusCommand>> as JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClassStatusCommand\r
      rectangle "==handle_stats_command()\\n\\nHandle /stats command - detailed statistics and metrics" <<JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClassStatsCommand>> as JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClassStatsCommand\r
      rectangle "==handle_help_command()\\n\\nHandle /help command - list available commands" <<JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClassHelpCommand>> as JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClassHelpCommand\r
      rectangle "==update_statistics()\\n\\nUpdate internal statistics counters" <<JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClassUpdateStats>> as JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClassUpdateStats\r
      rectangle "==format_statistics()\\n\\nFormat statistics for user display" <<JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClassFormatStats>> as JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClassFormatStats\r
    }\r
  }\r
  rectangle "Telegram Service" <<JobMonitoringBotServicesLayerServicesTelegramService>> as JobMonitoringBotServicesLayerServicesTelegramService {\r
    skinparam RectangleBorderColor<<JobMonitoringBotServicesLayerServicesTelegramService>> #3b82f6\r
    skinparam RectangleFontColor<<JobMonitoringBotServicesLayerServicesTelegramService>> #3b82f6\r
    skinparam RectangleBorderStyle<<JobMonitoringBotServicesLayerServicesTelegramService>> dashed\r
\r
    rectangle "==get_statistics()\\n\\nRetrieve bot operational statistics" <<JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClassGetStats>> as JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClassGetStats\r
  }\r
}\r
\r
JobMonitoringBotHandlersLayerHandlersCommandsHandlerCommandsModuleStartHandler .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClassStartCommand : "<color:#777777>Delegates to bot handler<color:#777777>"\r
JobMonitoringBotHandlersLayerHandlersCommandsHandlerCommandsModuleStatusHandler .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClassStatusCommand : "<color:#777777>Delegates to bot handler<color:#777777>"\r
JobMonitoringBotHandlersLayerHandlersCommandsHandlerCommandsModuleStatsHandler .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClassStatsCommand : "<color:#777777>Delegates to bot handler<color:#777777>"\r
JobMonitoringBotHandlersLayerHandlersCommandsHandlerCommandsModuleHelpHandler .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClassHelpCommand : "<color:#777777>Delegates to bot handler<color:#777777>"\r
JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClassStartCommand .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClassUpdateStats : "<color:#777777>Updates usage statistics<color:#777777>"\r
JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClassStatusCommand .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClassGetStats : "<color:#777777>Retrieves current statistics<color:#777777>"\r
JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClassStatsCommand .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClassFormatStats : "<color:#777777>Formats statistics for display<color:#777777>"\r
@enduml\r
`;case"dataFlow":return`@startuml\r
title "Data Flow - Message Processing Pipeline"\r
left to right direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam person<<BotUser>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<SourceChannels>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<TargetChat>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClassProcessMessage>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClassForwardMessage>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClassShouldForward>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClassExtractJobInfo>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClassContainsKeywords>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClassContainsExclusions>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClassValidateMessage>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesPersistentStoragePersistentStorageClassIsForwarded>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesPersistentStoragePersistentStorageClassAddForwarded>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesPersistentStoragePersistentStorageClassCleanupOld>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
person "==Bot User\\n\\nUsers interacting with the bot via Telegram commands" <<BotUser>> as BotUser\r
rectangle "==Source Channels\\n<size:10>[Telegram Channels]</size>\\n\\nMonitored job posting channels (cyithr, cyprusithr, relocation_vacancies)" <<SourceChannels>> as SourceChannels\r
rectangle "==Target Chat\\n<size:10>[Telegram Chat]</size>\\n\\nDestination chat where filtered job posts are forwarded" <<TargetChat>> as TargetChat\r
rectangle "Telegram Service" <<JobMonitoringBotServicesLayerServicesTelegramService>> as JobMonitoringBotServicesLayerServicesTelegramService {\r
  skinparam RectangleBorderColor<<JobMonitoringBotServicesLayerServicesTelegramService>> #3b82f6\r
  skinparam RectangleFontColor<<JobMonitoringBotServicesLayerServicesTelegramService>> #3b82f6\r
  skinparam RectangleBorderStyle<<JobMonitoringBotServicesLayerServicesTelegramService>> dashed\r
\r
  rectangle "TelegramService" <<JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClass>> as JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClass {\r
    skinparam RectangleBorderColor<<JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClass>> #3b82f6\r
    skinparam RectangleFontColor<<JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClass>> #3b82f6\r
    skinparam RectangleBorderStyle<<JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClass>> dashed\r
\r
    rectangle "==process_new_message()\\n\\nProcess incoming messages - filter and forward if needed" <<JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClassProcessMessage>> as JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClassProcessMessage\r
    rectangle "==forward_message()\\n\\nForward filtered messages to target chat" <<JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClassForwardMessage>> as JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClassForwardMessage\r
  }\r
}\r
rectangle "Message Processor" <<JobMonitoringBotServicesLayerServicesMessageProcessor>> as JobMonitoringBotServicesLayerServicesMessageProcessor {\r
  skinparam RectangleBorderColor<<JobMonitoringBotServicesLayerServicesMessageProcessor>> #3b82f6\r
  skinparam RectangleFontColor<<JobMonitoringBotServicesLayerServicesMessageProcessor>> #3b82f6\r
  skinparam RectangleBorderStyle<<JobMonitoringBotServicesLayerServicesMessageProcessor>> dashed\r
\r
  rectangle "MessageProcessor" <<JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClass>> as JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClass {\r
    skinparam RectangleBorderColor<<JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClass>> #3b82f6\r
    skinparam RectangleFontColor<<JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClass>> #3b82f6\r
    skinparam RectangleBorderStyle<<JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClass>> dashed\r
\r
    rectangle "==should_forward_message()\\n\\nMain filtering logic - combines keyword and exclusion checks" <<JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClassShouldForward>> as JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClassShouldForward\r
    rectangle "==extract_job_info()\\n\\nExtract structured job information from message text" <<JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClassExtractJobInfo>> as JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClassExtractJobInfo\r
    rectangle "==contains_keywords()\\n\\nCheck if message contains required keywords (python, developer, etc.)" <<JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClassContainsKeywords>> as JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClassContainsKeywords\r
    rectangle "==contains_exclusion_words()\\n\\nCheck if message contains exclusion words (senior, lead, etc.)" <<JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClassContainsExclusions>> as JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClassContainsExclusions\r
    rectangle "==validate_message_format()\\n\\nValidate message format and content quality" <<JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClassValidateMessage>> as JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClassValidateMessage\r
  }\r
}\r
rectangle "Persistent Storage" <<JobMonitoringBotServicesLayerServicesPersistentStorage>> as JobMonitoringBotServicesLayerServicesPersistentStorage {\r
  skinparam RectangleBorderColor<<JobMonitoringBotServicesLayerServicesPersistentStorage>> #3b82f6\r
  skinparam RectangleFontColor<<JobMonitoringBotServicesLayerServicesPersistentStorage>> #3b82f6\r
  skinparam RectangleBorderStyle<<JobMonitoringBotServicesLayerServicesPersistentStorage>> dashed\r
\r
  rectangle "==is_message_forwarded()\\n\\nCheck if message ID was already forwarded (prevent duplicates)" <<JobMonitoringBotServicesLayerServicesPersistentStoragePersistentStorageClassIsForwarded>> as JobMonitoringBotServicesLayerServicesPersistentStoragePersistentStorageClassIsForwarded\r
  rectangle "==add_forwarded_message()\\n\\nRecord newly forwarded message with timestamp" <<JobMonitoringBotServicesLayerServicesPersistentStoragePersistentStorageClassAddForwarded>> as JobMonitoringBotServicesLayerServicesPersistentStoragePersistentStorageClassAddForwarded\r
  rectangle "==cleanup_old_entries()\\n\\nRemove forwarded message entries older than 7 days" <<JobMonitoringBotServicesLayerServicesPersistentStoragePersistentStorageClassCleanupOld>> as JobMonitoringBotServicesLayerServicesPersistentStoragePersistentStorageClassCleanupOld\r
}\r
\r
JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClassProcessMessage .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClassShouldForward : "<color:#777777>Checks if message should be forwarded<color:#777777>"\r
JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClassShouldForward .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClassContainsKeywords : "<color:#777777>Validates required keywords<color:#777777>"\r
JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClassShouldForward .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClassContainsExclusions : "<color:#777777>Checks exclusion words<color:#777777>"\r
JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClassProcessMessage .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesPersistentStoragePersistentStorageClassIsForwarded : "<color:#777777>Checks if already forwarded<color:#777777>"\r
JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClassProcessMessage .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClassForwardMessage : "<color:#777777>Forwards approved messages<color:#777777>"\r
JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClassForwardMessage .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesPersistentStoragePersistentStorageClassAddForwarded : "<color:#777777>Records forwarded message<color:#777777>"\r
JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClassProcessMessage .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClassExtractJobInfo : "<color:#777777>Extracts job information<color:#777777>"\r
JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClassExtractJobInfo .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClassValidateMessage : "<color:#777777>Validates extracted data<color:#777777>"\r
JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClassProcessMessage .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesPersistentStoragePersistentStorageClassCleanupOld : "<color:#777777>Cleans up old entries<color:#777777>"\r
@enduml\r
`;case"index":return`@startuml\r
title "L0: System Context - Job Monitoring Bot"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam person<<BotUser>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBot>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<TelegramPlatform>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<SourceChannels>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<TargetChat>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
person "==Bot User\\n\\nUsers interacting with the bot via Telegram commands" <<BotUser>> as BotUser\r
rectangle "==Job Monitoring Bot\\n<size:10>[Python, Telethon, python-telegram-bot]</size>\\n\\nTelegram bot that monitors job channels and forwards relevant posts" <<JobMonitoringBot>> as JobMonitoringBot\r
rectangle "==Telegram Platform\\n<size:10>[Telegram API]</size>\\n\\nExternal Telegram messaging platform and API" <<TelegramPlatform>> as TelegramPlatform\r
rectangle "==Source Channels\\n<size:10>[Telegram Channels]</size>\\n\\nMonitored job posting channels (cyithr, cyprusithr, relocation_vacancies)" <<SourceChannels>> as SourceChannels\r
rectangle "==Target Chat\\n<size:10>[Telegram Chat]</size>\\n\\nDestination chat where filtered job posts are forwarded" <<TargetChat>> as TargetChat\r
\r
BotUser .[#777777,thickness=2].> JobMonitoringBot : "<color:#777777>Uses bot commands<color:#777777>"\r
JobMonitoringBot .[#777777,thickness=2].> TelegramPlatform : "<color:#777777>Connects via API<color:#777777>"\r
JobMonitoringBot .[#777777,thickness=2].> SourceChannels : "<color:#777777>Monitors for new messages<color:#777777>"\r
JobMonitoringBot .[#777777,thickness=2].> TargetChat : "<color:#777777>Forwards filtered messages<color:#777777>"\r
@enduml\r
`;case"jobMonitoringBot":return`@startuml\r
title "L1: System Architecture - Architectural Layers"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<JobMonitoringBotApplicationLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotHandlersLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotConfigurationLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotUtilitiesLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotDataLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
rectangle "Job Monitoring Bot" <<JobMonitoringBot>> as JobMonitoringBot {\r
  skinparam RectangleBorderColor<<JobMonitoringBot>> #3b82f6\r
  skinparam RectangleFontColor<<JobMonitoringBot>> #3b82f6\r
  skinparam RectangleBorderStyle<<JobMonitoringBot>> dashed\r
\r
  rectangle "==Application Layer\\n\\nEntry point and orchestration logic" <<JobMonitoringBotApplicationLayer>> as JobMonitoringBotApplicationLayer\r
  rectangle "==Handlers Layer\\n\\nUser interaction layer" <<JobMonitoringBotHandlersLayer>> as JobMonitoringBotHandlersLayer\r
  rectangle "==Services Layer\\n\\nCore business logic services" <<JobMonitoringBotServicesLayer>> as JobMonitoringBotServicesLayer\r
  rectangle "==Configuration Layer\\n\\nSettings and environment management" <<JobMonitoringBotConfigurationLayer>> as JobMonitoringBotConfigurationLayer\r
  rectangle "==Utilities Layer\\n\\nHelper functions and common utilities" <<JobMonitoringBotUtilitiesLayer>> as JobMonitoringBotUtilitiesLayer\r
  rectangle "==Data Storage Layer\\n\\nFile-based persistence layer" <<JobMonitoringBotDataLayer>> as JobMonitoringBotDataLayer\r
}\r
\r
JobMonitoringBotApplicationLayer .[#777777,thickness=2].> JobMonitoringBotServicesLayer : "<color:#777777>[...]<color:#777777>"\r
JobMonitoringBotApplicationLayer .[#777777,thickness=2].> JobMonitoringBotUtilitiesLayer : "<color:#777777>Configures application logging<color:#777777>"\r
JobMonitoringBotServicesLayer .[#777777,thickness=2].> JobMonitoringBotConfigurationLayer : "<color:#777777>[...]<color:#777777>"\r
JobMonitoringBotServicesLayer .[#777777,thickness=2].> JobMonitoringBotUtilitiesLayer : "<color:#777777>[...]<color:#777777>"\r
JobMonitoringBotHandlersLayer .[#777777,thickness=2].> JobMonitoringBotServicesLayer : "<color:#777777>[...]<color:#777777>"\r
JobMonitoringBotHandlersLayer .[#777777,thickness=2].> JobMonitoringBotUtilitiesLayer : "<color:#777777>Logs command errors<color:#777777>"\r
@enduml\r
`;case"applicationLayer":return`@startuml\r
title "L2: Application Layer - Entry Point & Orchestration"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<JobMonitoringBotApplicationLayerMainApp>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotApplicationLayerBotCore>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotUtilitiesLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
rectangle "Application Layer" <<JobMonitoringBotApplicationLayer>> as JobMonitoringBotApplicationLayer {\r
  skinparam RectangleBorderColor<<JobMonitoringBotApplicationLayer>> #3b82f6\r
  skinparam RectangleFontColor<<JobMonitoringBotApplicationLayer>> #3b82f6\r
  skinparam RectangleBorderStyle<<JobMonitoringBotApplicationLayer>> dashed\r
\r
  rectangle "==Main Application\\n<size:10>[Python, asyncio]</size>\\n\\nEntry point and orchestrator" <<JobMonitoringBotApplicationLayerMainApp>> as JobMonitoringBotApplicationLayerMainApp\r
  rectangle "==Bot Core\\n<size:10>[Python, JobMonitoringBot class]</size>\\n\\nMain bot coordination logic" <<JobMonitoringBotApplicationLayerBotCore>> as JobMonitoringBotApplicationLayerBotCore\r
}\r
rectangle "==Utilities Layer\\n\\nHelper functions and common utilities" <<JobMonitoringBotUtilitiesLayer>> as JobMonitoringBotUtilitiesLayer\r
rectangle "==Services Layer\\n\\nCore business logic services" <<JobMonitoringBotServicesLayer>> as JobMonitoringBotServicesLayer\r
\r
JobMonitoringBotApplicationLayerMainApp .[#777777,thickness=2].> JobMonitoringBotApplicationLayerBotCore : "<color:#777777>[...]<color:#777777>"\r
JobMonitoringBotApplicationLayerMainApp .[#777777,thickness=2].> JobMonitoringBotUtilitiesLayer : "<color:#777777>Configures application logging<color:#777777>"\r
JobMonitoringBotApplicationLayerBotCore .[#777777,thickness=2].> JobMonitoringBotServicesLayer : "<color:#777777>[...]<color:#777777>"\r
@enduml\r
`;case"configurationLayer":return`@startuml\r
title "L2: Configuration Layer - Settings Management"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<JobMonitoringBotServicesLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotConfigurationLayerConfiguration>>{\r
  BackgroundColor #64748b\r
  FontColor #FFFFFF\r
  BorderColor #64748b\r
}\r
rectangle "==Services Layer\\n\\nCore business logic services" <<JobMonitoringBotServicesLayer>> as JobMonitoringBotServicesLayer\r
rectangle "Configuration Layer" <<JobMonitoringBotConfigurationLayer>> as JobMonitoringBotConfigurationLayer {\r
  skinparam RectangleBorderColor<<JobMonitoringBotConfigurationLayer>> #3b82f6\r
  skinparam RectangleFontColor<<JobMonitoringBotConfigurationLayer>> #3b82f6\r
  skinparam RectangleBorderStyle<<JobMonitoringBotConfigurationLayer>> dashed\r
\r
  rectangle "==Configuration\\n<size:10>[Settings module]</size>\\n\\nSettings and environment management" <<JobMonitoringBotConfigurationLayerConfiguration>> as JobMonitoringBotConfigurationLayerConfiguration\r
}\r
\r
JobMonitoringBotServicesLayer .[#777777,thickness=2].> JobMonitoringBotConfigurationLayerConfiguration : "<color:#777777>[...]<color:#777777>"\r
@enduml\r
`;case"dataLayer":return`@startuml\r
title "L2: Data Storage Layer - Persistence"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<JobMonitoringBotDataLayerDataStorage>>{\r
  BackgroundColor #0284c7\r
  FontColor #FFFFFF\r
  BorderColor #0284c7\r
}\r
rectangle "Data Storage Layer" <<JobMonitoringBotDataLayer>> as JobMonitoringBotDataLayer {\r
  skinparam RectangleBorderColor<<JobMonitoringBotDataLayer>> #3b82f6\r
  skinparam RectangleFontColor<<JobMonitoringBotDataLayer>> #3b82f6\r
  skinparam RectangleBorderStyle<<JobMonitoringBotDataLayer>> dashed\r
\r
  rectangle "==Data Storage\\n<size:10>[JSON files]</size>\\n\\nFile-based persistence layer" <<JobMonitoringBotDataLayerDataStorage>> as JobMonitoringBotDataLayerDataStorage\r
}\r
@enduml\r
`;case"handlersLayer":return`@startuml\r
title "L2: Handlers Layer - User Interaction"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<JobMonitoringBotHandlersLayerHandlers>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotUtilitiesLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
rectangle "Handlers Layer" <<JobMonitoringBotHandlersLayer>> as JobMonitoringBotHandlersLayer {\r
  skinparam RectangleBorderColor<<JobMonitoringBotHandlersLayer>> #3b82f6\r
  skinparam RectangleFontColor<<JobMonitoringBotHandlersLayer>> #3b82f6\r
  skinparam RectangleBorderStyle<<JobMonitoringBotHandlersLayer>> dashed\r
\r
  rectangle "==Command Handlers\\n<size:10>[python-telegram-bot handlers]</size>\\n\\nUser interaction layer" <<JobMonitoringBotHandlersLayerHandlers>> as JobMonitoringBotHandlersLayerHandlers\r
}\r
rectangle "==Services Layer\\n\\nCore business logic services" <<JobMonitoringBotServicesLayer>> as JobMonitoringBotServicesLayer\r
rectangle "==Utilities Layer\\n\\nHelper functions and common utilities" <<JobMonitoringBotUtilitiesLayer>> as JobMonitoringBotUtilitiesLayer\r
\r
JobMonitoringBotHandlersLayerHandlers .[#777777,thickness=2].> JobMonitoringBotServicesLayer : "<color:#777777>[...]<color:#777777>"\r
JobMonitoringBotHandlersLayerHandlers .[#777777,thickness=2].> JobMonitoringBotUtilitiesLayer : "<color:#777777>Logs command errors<color:#777777>"\r
@enduml\r
`;case"servicesLayer":return`@startuml\r
title "L2: Services Layer - Core Business Logic"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<JobMonitoringBotApplicationLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotHandlersLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServices>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotConfigurationLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotUtilitiesLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
rectangle "==Application Layer\\n\\nEntry point and orchestration logic" <<JobMonitoringBotApplicationLayer>> as JobMonitoringBotApplicationLayer\r
rectangle "==Handlers Layer\\n\\nUser interaction layer" <<JobMonitoringBotHandlersLayer>> as JobMonitoringBotHandlersLayer\r
rectangle "Services Layer" <<JobMonitoringBotServicesLayer>> as JobMonitoringBotServicesLayer {\r
  skinparam RectangleBorderColor<<JobMonitoringBotServicesLayer>> #3b82f6\r
  skinparam RectangleFontColor<<JobMonitoringBotServicesLayer>> #3b82f6\r
  skinparam RectangleBorderStyle<<JobMonitoringBotServicesLayer>> dashed\r
\r
  rectangle "==Services\\n<size:10>[Python services]</size>\\n\\nBusiness logic service classes" <<JobMonitoringBotServicesLayerServices>> as JobMonitoringBotServicesLayerServices\r
}\r
rectangle "==Configuration Layer\\n\\nSettings and environment management" <<JobMonitoringBotConfigurationLayer>> as JobMonitoringBotConfigurationLayer\r
rectangle "==Utilities Layer\\n\\nHelper functions and common utilities" <<JobMonitoringBotUtilitiesLayer>> as JobMonitoringBotUtilitiesLayer\r
\r
JobMonitoringBotApplicationLayer .[#777777,thickness=2].> JobMonitoringBotServicesLayerServices : "<color:#777777>[...]<color:#777777>"\r
JobMonitoringBotHandlersLayer .[#777777,thickness=2].> JobMonitoringBotServicesLayerServices : "<color:#777777>[...]<color:#777777>"\r
JobMonitoringBotServicesLayerServices .[#777777,thickness=2].> JobMonitoringBotConfigurationLayer : "<color:#777777>[...]<color:#777777>"\r
JobMonitoringBotServicesLayerServices .[#777777,thickness=2].> JobMonitoringBotUtilitiesLayer : "<color:#777777>[...]<color:#777777>"\r
@enduml\r
`;case"utilitiesLayer":return`@startuml\r
title "L2: Utilities Layer - Helper Functions"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<JobMonitoringBotApplicationLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotHandlersLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotUtilitiesLayerUtilities>>{\r
  BackgroundColor #0284c7\r
  FontColor #FFFFFF\r
  BorderColor #0284c7\r
}\r
rectangle "==Application Layer\\n\\nEntry point and orchestration logic" <<JobMonitoringBotApplicationLayer>> as JobMonitoringBotApplicationLayer\r
rectangle "==Services Layer\\n\\nCore business logic services" <<JobMonitoringBotServicesLayer>> as JobMonitoringBotServicesLayer\r
rectangle "==Handlers Layer\\n\\nUser interaction layer" <<JobMonitoringBotHandlersLayer>> as JobMonitoringBotHandlersLayer\r
rectangle "Utilities Layer" <<JobMonitoringBotUtilitiesLayer>> as JobMonitoringBotUtilitiesLayer {\r
  skinparam RectangleBorderColor<<JobMonitoringBotUtilitiesLayer>> #3b82f6\r
  skinparam RectangleFontColor<<JobMonitoringBotUtilitiesLayer>> #3b82f6\r
  skinparam RectangleBorderStyle<<JobMonitoringBotUtilitiesLayer>> dashed\r
\r
  rectangle "==Utilities\\n<size:10>[Python utility modules]</size>\\n\\nHelper functions and common utilities" <<JobMonitoringBotUtilitiesLayerUtilities>> as JobMonitoringBotUtilitiesLayerUtilities\r
}\r
\r
JobMonitoringBotApplicationLayer .[#777777,thickness=2].> JobMonitoringBotUtilitiesLayerUtilities : "<color:#777777>Configures application logging<color:#777777>"\r
JobMonitoringBotServicesLayer .[#777777,thickness=2].> JobMonitoringBotUtilitiesLayerUtilities : "<color:#777777>[...]<color:#777777>"\r
JobMonitoringBotHandlersLayer .[#777777,thickness=2].> JobMonitoringBotUtilitiesLayerUtilities : "<color:#777777>Logs command errors<color:#777777>"\r
@enduml\r
`;case"botCore":return`@startuml\r
title "L3: Bot Core Container - Coordination Logic"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<JobMonitoringBotApplicationLayerMainApp>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotApplicationLayerBotCoreBotModule>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
rectangle "==Main Application\\n<size:10>[Python, asyncio]</size>\\n\\nEntry point and orchestrator" <<JobMonitoringBotApplicationLayerMainApp>> as JobMonitoringBotApplicationLayerMainApp\r
rectangle "Bot Core" <<JobMonitoringBotApplicationLayerBotCore>> as JobMonitoringBotApplicationLayerBotCore {\r
  skinparam RectangleBorderColor<<JobMonitoringBotApplicationLayerBotCore>> #3b82f6\r
  skinparam RectangleFontColor<<JobMonitoringBotApplicationLayerBotCore>> #3b82f6\r
  skinparam RectangleBorderStyle<<JobMonitoringBotApplicationLayerBotCore>> dashed\r
\r
  rectangle "==bot.py\\n\\nCore bot implementation" <<JobMonitoringBotApplicationLayerBotCoreBotModule>> as JobMonitoringBotApplicationLayerBotCoreBotModule\r
}\r
rectangle "==Services Layer\\n\\nCore business logic services" <<JobMonitoringBotServicesLayer>> as JobMonitoringBotServicesLayer\r
\r
JobMonitoringBotApplicationLayerMainApp .[#777777,thickness=2].> JobMonitoringBotApplicationLayerBotCoreBotModule : "<color:#777777>[...]<color:#777777>"\r
JobMonitoringBotApplicationLayerBotCoreBotModule .[#777777,thickness=2].> JobMonitoringBotServicesLayer : "<color:#777777>[...]<color:#777777>"\r
@enduml\r
`;case"configuration":return`@startuml\r
title "L3: Configuration Container - Settings Management"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<JobMonitoringBotServicesLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotConfigurationLayerConfigurationSettingsModule>>{\r
  BackgroundColor #64748b\r
  FontColor #FFFFFF\r
  BorderColor #64748b\r
}\r
rectangle "==Services Layer\\n\\nCore business logic services" <<JobMonitoringBotServicesLayer>> as JobMonitoringBotServicesLayer\r
rectangle "Configuration" <<JobMonitoringBotConfigurationLayerConfiguration>> as JobMonitoringBotConfigurationLayerConfiguration {\r
  skinparam RectangleBorderColor<<JobMonitoringBotConfigurationLayerConfiguration>> #3b82f6\r
  skinparam RectangleFontColor<<JobMonitoringBotConfigurationLayerConfiguration>> #3b82f6\r
  skinparam RectangleBorderStyle<<JobMonitoringBotConfigurationLayerConfiguration>> dashed\r
\r
  rectangle "==Settings Module\\n<size:10>[Python dataclass]</size>\\n\\nConfiguration management" <<JobMonitoringBotConfigurationLayerConfigurationSettingsModule>> as JobMonitoringBotConfigurationLayerConfigurationSettingsModule\r
}\r
\r
JobMonitoringBotServicesLayer .[#777777,thickness=2].> JobMonitoringBotConfigurationLayerConfigurationSettingsModule : "<color:#777777>[...]<color:#777777>"\r
@enduml\r
`;case"dataStorage":return`@startuml\r
title "L3: Data Storage Container - Persistence Components"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<JobMonitoringBotDataLayerDataStorageForwardedMessages>>{\r
  BackgroundColor #0284c7\r
  FontColor #FFFFFF\r
  BorderColor #0284c7\r
}\r
skinparam rectangle<<JobMonitoringBotDataLayerDataStorageBotState>>{\r
  BackgroundColor #0284c7\r
  FontColor #FFFFFF\r
  BorderColor #0284c7\r
}\r
skinparam rectangle<<JobMonitoringBotDataLayerDataStorageConfigCache>>{\r
  BackgroundColor #0284c7\r
  FontColor #FFFFFF\r
  BorderColor #0284c7\r
}\r
skinparam rectangle<<JobMonitoringBotDataLayerDataStorageLogs>>{\r
  BackgroundColor #0284c7\r
  FontColor #FFFFFF\r
  BorderColor #0284c7\r
}\r
rectangle "Data Storage" <<JobMonitoringBotDataLayerDataStorage>> as JobMonitoringBotDataLayerDataStorage {\r
  skinparam RectangleBorderColor<<JobMonitoringBotDataLayerDataStorage>> #3b82f6\r
  skinparam RectangleFontColor<<JobMonitoringBotDataLayerDataStorage>> #3b82f6\r
  skinparam RectangleBorderStyle<<JobMonitoringBotDataLayerDataStorage>> dashed\r
\r
  rectangle "==Forwarded Messages Store\\n<size:10>[JSON file with message_id, timestamp, channel_name]</size>\\n\\nforwarded_messages.json - tracks all forwarded message IDs with timestamps" <<JobMonitoringBotDataLayerDataStorageForwardedMessages>> as JobMonitoringBotDataLayerDataStorageForwardedMessages\r
  rectangle "==Bot State Store\\n<size:10>[JSON file with counters, last_run, error_counts]</size>\\n\\nbot_state.json - maintains operational state and statistics" <<JobMonitoringBotDataLayerDataStorageBotState>> as JobMonitoringBotDataLayerDataStorageBotState\r
  rectangle "==Config Cache\\n<size:10>[In-memory cache with file backup]</size>\\n\\nCached configuration data for performance" <<JobMonitoringBotDataLayerDataStorageConfigCache>> as JobMonitoringBotDataLayerDataStorageConfigCache\r
  rectangle "==Log Files\\n<size:10>[Rotating log files with timestamps]</size>\\n\\nApplication and error logs" <<JobMonitoringBotDataLayerDataStorageLogs>> as JobMonitoringBotDataLayerDataStorageLogs\r
}\r
@enduml\r
`;case"handlers":return`@startuml\r
title "L3: Handlers Container - User Interaction Workers"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<JobMonitoringBotHandlersLayerHandlersCommandsHandler>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotHandlersLayerHandlersMessageHandler>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotUtilitiesLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
rectangle "Command Handlers" <<JobMonitoringBotHandlersLayerHandlers>> as JobMonitoringBotHandlersLayerHandlers {\r
  skinparam RectangleBorderColor<<JobMonitoringBotHandlersLayerHandlers>> #3b82f6\r
  skinparam RectangleFontColor<<JobMonitoringBotHandlersLayerHandlers>> #3b82f6\r
  skinparam RectangleBorderStyle<<JobMonitoringBotHandlersLayerHandlers>> dashed\r
\r
  rectangle "==Commands Handler\\n<size:10>[Commands module]</size>\\n\\nCommand processing interface" <<JobMonitoringBotHandlersLayerHandlersCommandsHandler>> as JobMonitoringBotHandlersLayerHandlersCommandsHandler\r
  rectangle "==Message Handler\\n<size:10>[Messages module]</size>\\n\\nMessage processing interface" <<JobMonitoringBotHandlersLayerHandlersMessageHandler>> as JobMonitoringBotHandlersLayerHandlersMessageHandler\r
}\r
rectangle "==Utilities Layer\\n\\nHelper functions and common utilities" <<JobMonitoringBotUtilitiesLayer>> as JobMonitoringBotUtilitiesLayer\r
rectangle "==Services Layer\\n\\nCore business logic services" <<JobMonitoringBotServicesLayer>> as JobMonitoringBotServicesLayer\r
\r
JobMonitoringBotHandlersLayerHandlersCommandsHandler .[#777777,thickness=2].> JobMonitoringBotServicesLayer : "<color:#777777>Delegates to bot handler<color:#777777>"\r
JobMonitoringBotHandlersLayerHandlersCommandsHandler .[#777777,thickness=2].> JobMonitoringBotUtilitiesLayer : "<color:#777777>Logs command errors<color:#777777>"\r
JobMonitoringBotHandlersLayerHandlersMessageHandler .[#777777,thickness=2].> JobMonitoringBotServicesLayer : "<color:#777777>[...]<color:#777777>"\r
@enduml\r
`;case"mainApp":return`@startuml\r
title "L3: Main Application Container - Entry Point Details"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<JobMonitoringBotApplicationLayerMainAppMainModule>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotUtilitiesLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotApplicationLayerBotCore>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
rectangle "Main Application" <<JobMonitoringBotApplicationLayerMainApp>> as JobMonitoringBotApplicationLayerMainApp {\r
  skinparam RectangleBorderColor<<JobMonitoringBotApplicationLayerMainApp>> #3b82f6\r
  skinparam RectangleFontColor<<JobMonitoringBotApplicationLayerMainApp>> #3b82f6\r
  skinparam RectangleBorderStyle<<JobMonitoringBotApplicationLayerMainApp>> dashed\r
\r
  rectangle "==main.py\\n\\nApplication entry point" <<JobMonitoringBotApplicationLayerMainAppMainModule>> as JobMonitoringBotApplicationLayerMainAppMainModule\r
}\r
rectangle "==Utilities Layer\\n\\nHelper functions and common utilities" <<JobMonitoringBotUtilitiesLayer>> as JobMonitoringBotUtilitiesLayer\r
rectangle "==Bot Core\\n<size:10>[Python, JobMonitoringBot class]</size>\\n\\nMain bot coordination logic" <<JobMonitoringBotApplicationLayerBotCore>> as JobMonitoringBotApplicationLayerBotCore\r
\r
JobMonitoringBotApplicationLayerMainAppMainModule .[#777777,thickness=2].> JobMonitoringBotUtilitiesLayer : "<color:#777777>Configures application logging<color:#777777>"\r
JobMonitoringBotApplicationLayerMainAppMainModule .[#777777,thickness=2].> JobMonitoringBotApplicationLayerBotCore : "<color:#777777>[...]<color:#777777>"\r
@enduml\r
`;case"services":return`@startuml\r
title "L3: Services Container - Business Logic Workers"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<JobMonitoringBotApplicationLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotHandlersLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesBotHandler>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesTelegramService>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesMessageProcessor>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesPersistentStorage>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
skinparam rectangle<<JobMonitoringBotConfigurationLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotUtilitiesLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
rectangle "==Application Layer\\n\\nEntry point and orchestration logic" <<JobMonitoringBotApplicationLayer>> as JobMonitoringBotApplicationLayer\r
rectangle "==Handlers Layer\\n\\nUser interaction layer" <<JobMonitoringBotHandlersLayer>> as JobMonitoringBotHandlersLayer\r
rectangle "Services" <<JobMonitoringBotServicesLayerServices>> as JobMonitoringBotServicesLayerServices {\r
  skinparam RectangleBorderColor<<JobMonitoringBotServicesLayerServices>> #3b82f6\r
  skinparam RectangleFontColor<<JobMonitoringBotServicesLayerServices>> #3b82f6\r
  skinparam RectangleBorderStyle<<JobMonitoringBotServicesLayerServices>> dashed\r
\r
  rectangle "==Bot Handler\\n<size:10>[BotHandler class]</size>\\n\\nUser command processing" <<JobMonitoringBotServicesLayerServicesBotHandler>> as JobMonitoringBotServicesLayerServicesBotHandler\r
  rectangle "==Telegram Service\\n<size:10>[Telethon TelegramService class]</size>\\n\\nHandles all Telegram operations" <<JobMonitoringBotServicesLayerServicesTelegramService>> as JobMonitoringBotServicesLayerServicesTelegramService\r
  rectangle "==Message Processor\\n<size:10>[MessageProcessor class]</size>\\n\\nMessage filtering and validation" <<JobMonitoringBotServicesLayerServicesMessageProcessor>> as JobMonitoringBotServicesLayerServicesMessageProcessor\r
  rectangle "==Persistent Storage\\n<size:10>[JSON file storage]</size>\\n\\nData persistence and retrieval" <<JobMonitoringBotServicesLayerServicesPersistentStorage>> as JobMonitoringBotServicesLayerServicesPersistentStorage\r
}\r
rectangle "==Configuration Layer\\n\\nSettings and environment management" <<JobMonitoringBotConfigurationLayer>> as JobMonitoringBotConfigurationLayer\r
rectangle "==Utilities Layer\\n\\nHelper functions and common utilities" <<JobMonitoringBotUtilitiesLayer>> as JobMonitoringBotUtilitiesLayer\r
\r
JobMonitoringBotApplicationLayer .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesTelegramService : "<color:#777777>[...]<color:#777777>"\r
JobMonitoringBotHandlersLayer .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesTelegramService : "<color:#777777>[...]<color:#777777>"\r
JobMonitoringBotHandlersLayer .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesBotHandler : "<color:#777777>Delegates to bot handler<color:#777777>"\r
JobMonitoringBotServicesLayerServicesTelegramService .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesMessageProcessor : "<color:#777777>[...]<color:#777777>"\r
JobMonitoringBotServicesLayerServicesTelegramService .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesPersistentStorage : "<color:#777777>[...]<color:#777777>"\r
JobMonitoringBotServicesLayerServicesBotHandler .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesTelegramService : "<color:#777777>Retrieves current statistics<color:#777777>"\r
JobMonitoringBotServicesLayerServicesBotHandler .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesPersistentStorage : "<color:#777777>[...]<color:#777777>"\r
JobMonitoringBotServicesLayerServicesTelegramService .[#777777,thickness=2].> JobMonitoringBotConfigurationLayer : "<color:#777777>[...]<color:#777777>"\r
JobMonitoringBotServicesLayerServicesTelegramService .[#777777,thickness=2].> JobMonitoringBotUtilitiesLayer : "<color:#777777>Logs message events<color:#777777>"\r
JobMonitoringBotServicesLayerServicesMessageProcessor .[#777777,thickness=2].> JobMonitoringBotConfigurationLayer : "<color:#777777>Uses keyword filtering rules<color:#777777>"\r
JobMonitoringBotServicesLayerServicesBotHandler .[#777777,thickness=2].> JobMonitoringBotUtilitiesLayer : "<color:#777777>Uses formatting utilities<color:#777777>"\r
JobMonitoringBotServicesLayerServicesPersistentStorage .[#777777,thickness=2].> JobMonitoringBotUtilitiesLayer : "<color:#777777>Uses timestamp utilities<color:#777777>"\r
@enduml\r
`;case"utilities":return`@startuml\r
title "L3: Utilities Container - Helper Functions"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<JobMonitoringBotApplicationLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotHandlersLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotUtilitiesLayerUtilitiesLoggingModule>>{\r
  BackgroundColor #0284c7\r
  FontColor #FFFFFF\r
  BorderColor #0284c7\r
}\r
skinparam rectangle<<JobMonitoringBotUtilitiesLayerUtilitiesHelpersModule>>{\r
  BackgroundColor #0284c7\r
  FontColor #FFFFFF\r
  BorderColor #0284c7\r
}\r
rectangle "==Application Layer\\n\\nEntry point and orchestration logic" <<JobMonitoringBotApplicationLayer>> as JobMonitoringBotApplicationLayer\r
rectangle "==Services Layer\\n\\nCore business logic services" <<JobMonitoringBotServicesLayer>> as JobMonitoringBotServicesLayer\r
rectangle "==Handlers Layer\\n\\nUser interaction layer" <<JobMonitoringBotHandlersLayer>> as JobMonitoringBotHandlersLayer\r
rectangle "Utilities" <<JobMonitoringBotUtilitiesLayerUtilities>> as JobMonitoringBotUtilitiesLayerUtilities {\r
  skinparam RectangleBorderColor<<JobMonitoringBotUtilitiesLayerUtilities>> #3b82f6\r
  skinparam RectangleFontColor<<JobMonitoringBotUtilitiesLayerUtilities>> #3b82f6\r
  skinparam RectangleBorderStyle<<JobMonitoringBotUtilitiesLayerUtilities>> dashed\r
\r
  rectangle "==Logging\\n\\nLogging configuration and utilities" <<JobMonitoringBotUtilitiesLayerUtilitiesLoggingModule>> as JobMonitoringBotUtilitiesLayerUtilitiesLoggingModule\r
  rectangle "==Helpers\\n\\nCommon utility functions" <<JobMonitoringBotUtilitiesLayerUtilitiesHelpersModule>> as JobMonitoringBotUtilitiesLayerUtilitiesHelpersModule\r
}\r
\r
JobMonitoringBotApplicationLayer .[#777777,thickness=2].> JobMonitoringBotUtilitiesLayerUtilitiesLoggingModule : "<color:#777777>Configures application logging<color:#777777>"\r
JobMonitoringBotServicesLayer .[#777777,thickness=2].> JobMonitoringBotUtilitiesLayerUtilitiesHelpersModule : "<color:#777777>[...]<color:#777777>"\r
JobMonitoringBotServicesLayer .[#777777,thickness=2].> JobMonitoringBotUtilitiesLayerUtilitiesLoggingModule : "<color:#777777>Logs message events<color:#777777>"\r
JobMonitoringBotHandlersLayer .[#777777,thickness=2].> JobMonitoringBotUtilitiesLayerUtilitiesLoggingModule : "<color:#777777>Logs command errors<color:#777777>"\r
@enduml\r
`;case"botHandler":return`@startuml\r
title "L4: Bot Handler Worker - Command Processing"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<JobMonitoringBotHandlersLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClass>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
skinparam rectangle<<JobMonitoringBotUtilitiesLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesTelegramService>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesPersistentStorage>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
rectangle "==Handlers Layer\\n\\nUser interaction layer" <<JobMonitoringBotHandlersLayer>> as JobMonitoringBotHandlersLayer\r
rectangle "Bot Handler" <<JobMonitoringBotServicesLayerServicesBotHandler>> as JobMonitoringBotServicesLayerServicesBotHandler {\r
  skinparam RectangleBorderColor<<JobMonitoringBotServicesLayerServicesBotHandler>> #3b82f6\r
  skinparam RectangleFontColor<<JobMonitoringBotServicesLayerServicesBotHandler>> #3b82f6\r
  skinparam RectangleBorderStyle<<JobMonitoringBotServicesLayerServicesBotHandler>> dashed\r
\r
  rectangle "==BotHandler\\n\\nCommand handler implementation" <<JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClass>> as JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClass\r
}\r
rectangle "==Utilities Layer\\n\\nHelper functions and common utilities" <<JobMonitoringBotUtilitiesLayer>> as JobMonitoringBotUtilitiesLayer\r
rectangle "==Telegram Service\\n<size:10>[Telethon TelegramService class]</size>\\n\\nHandles all Telegram operations" <<JobMonitoringBotServicesLayerServicesTelegramService>> as JobMonitoringBotServicesLayerServicesTelegramService\r
rectangle "==Persistent Storage\\n<size:10>[JSON file storage]</size>\\n\\nData persistence and retrieval" <<JobMonitoringBotServicesLayerServicesPersistentStorage>> as JobMonitoringBotServicesLayerServicesPersistentStorage\r
\r
JobMonitoringBotHandlersLayer .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClass : "<color:#777777>Delegates to bot handler<color:#777777>"\r
JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClass .[#777777,thickness=2].> JobMonitoringBotUtilitiesLayer : "<color:#777777>Uses formatting utilities<color:#777777>"\r
JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClass .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesTelegramService : "<color:#777777>Retrieves current statistics<color:#777777>"\r
JobMonitoringBotServicesLayerServicesBotHandlerBotHandlerClass .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesPersistentStorage : "<color:#777777>[...]<color:#777777>"\r
@enduml\r
`;case"commandsHandler":return`@startuml\r
title "L4: Commands Handler Worker - Command Interface"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<JobMonitoringBotHandlersLayerHandlersCommandsHandlerCommandsModule>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotUtilitiesLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
rectangle "Commands Handler" <<JobMonitoringBotHandlersLayerHandlersCommandsHandler>> as JobMonitoringBotHandlersLayerHandlersCommandsHandler {\r
  skinparam RectangleBorderColor<<JobMonitoringBotHandlersLayerHandlersCommandsHandler>> #3b82f6\r
  skinparam RectangleFontColor<<JobMonitoringBotHandlersLayerHandlersCommandsHandler>> #3b82f6\r
  skinparam RectangleBorderStyle<<JobMonitoringBotHandlersLayerHandlersCommandsHandler>> dashed\r
\r
  rectangle "==commands.py\\n\\nCommand handler implementations" <<JobMonitoringBotHandlersLayerHandlersCommandsHandlerCommandsModule>> as JobMonitoringBotHandlersLayerHandlersCommandsHandlerCommandsModule\r
}\r
rectangle "==Services Layer\\n\\nCore business logic services" <<JobMonitoringBotServicesLayer>> as JobMonitoringBotServicesLayer\r
rectangle "==Utilities Layer\\n\\nHelper functions and common utilities" <<JobMonitoringBotUtilitiesLayer>> as JobMonitoringBotUtilitiesLayer\r
\r
JobMonitoringBotHandlersLayerHandlersCommandsHandlerCommandsModule .[#777777,thickness=2].> JobMonitoringBotServicesLayer : "<color:#777777>Delegates to bot handler<color:#777777>"\r
JobMonitoringBotHandlersLayerHandlersCommandsHandlerCommandsModule .[#777777,thickness=2].> JobMonitoringBotUtilitiesLayer : "<color:#777777>Logs command errors<color:#777777>"\r
@enduml\r
`;case"messageHandler":return`@startuml\r
title "L4: Message Handler Worker - Message Routing"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<JobMonitoringBotHandlersLayerHandlersMessageHandlerMessagesModule>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
rectangle "Message Handler" <<JobMonitoringBotHandlersLayerHandlersMessageHandler>> as JobMonitoringBotHandlersLayerHandlersMessageHandler {\r
  skinparam RectangleBorderColor<<JobMonitoringBotHandlersLayerHandlersMessageHandler>> #3b82f6\r
  skinparam RectangleFontColor<<JobMonitoringBotHandlersLayerHandlersMessageHandler>> #3b82f6\r
  skinparam RectangleBorderStyle<<JobMonitoringBotHandlersLayerHandlersMessageHandler>> dashed\r
\r
  rectangle "==messages.py\\n\\nMessage processing implementations" <<JobMonitoringBotHandlersLayerHandlersMessageHandlerMessagesModule>> as JobMonitoringBotHandlersLayerHandlersMessageHandlerMessagesModule\r
}\r
rectangle "==Services Layer\\n\\nCore business logic services" <<JobMonitoringBotServicesLayer>> as JobMonitoringBotServicesLayer\r
\r
JobMonitoringBotHandlersLayerHandlersMessageHandlerMessagesModule .[#777777,thickness=2].> JobMonitoringBotServicesLayer : "<color:#777777>[...]<color:#777777>"\r
@enduml\r
`;case"messageProcessor":return`@startuml\r
title "L4: Message Processor Worker - Filtering Logic"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesTelegramService>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClass>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
skinparam rectangle<<JobMonitoringBotConfigurationLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
rectangle "==Telegram Service\\n<size:10>[Telethon TelegramService class]</size>\\n\\nHandles all Telegram operations" <<JobMonitoringBotServicesLayerServicesTelegramService>> as JobMonitoringBotServicesLayerServicesTelegramService\r
rectangle "Message Processor" <<JobMonitoringBotServicesLayerServicesMessageProcessor>> as JobMonitoringBotServicesLayerServicesMessageProcessor {\r
  skinparam RectangleBorderColor<<JobMonitoringBotServicesLayerServicesMessageProcessor>> #3b82f6\r
  skinparam RectangleFontColor<<JobMonitoringBotServicesLayerServicesMessageProcessor>> #3b82f6\r
  skinparam RectangleBorderStyle<<JobMonitoringBotServicesLayerServicesMessageProcessor>> dashed\r
\r
  rectangle "==MessageProcessor\\n\\nStatic filtering logic" <<JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClass>> as JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClass\r
}\r
rectangle "==Configuration Layer\\n\\nSettings and environment management" <<JobMonitoringBotConfigurationLayer>> as JobMonitoringBotConfigurationLayer\r
\r
JobMonitoringBotServicesLayerServicesTelegramService .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClass : "<color:#777777>[...]<color:#777777>"\r
JobMonitoringBotServicesLayerServicesMessageProcessorMessageProcessorClass .[#777777,thickness=2].> JobMonitoringBotConfigurationLayer : "<color:#777777>Uses keyword filtering rules<color:#777777>"\r
@enduml\r
`;case"persistentStorage":return`@startuml\r
title "L4: Persistent Storage Worker - Data Management"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesTelegramService>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesBotHandler>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesPersistentStoragePersistentStorageClass>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
skinparam rectangle<<JobMonitoringBotUtilitiesLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
rectangle "==Telegram Service\\n<size:10>[Telethon TelegramService class]</size>\\n\\nHandles all Telegram operations" <<JobMonitoringBotServicesLayerServicesTelegramService>> as JobMonitoringBotServicesLayerServicesTelegramService\r
rectangle "==Bot Handler\\n<size:10>[BotHandler class]</size>\\n\\nUser command processing" <<JobMonitoringBotServicesLayerServicesBotHandler>> as JobMonitoringBotServicesLayerServicesBotHandler\r
rectangle "Persistent Storage" <<JobMonitoringBotServicesLayerServicesPersistentStorage>> as JobMonitoringBotServicesLayerServicesPersistentStorage {\r
  skinparam RectangleBorderColor<<JobMonitoringBotServicesLayerServicesPersistentStorage>> #3b82f6\r
  skinparam RectangleFontColor<<JobMonitoringBotServicesLayerServicesPersistentStorage>> #3b82f6\r
  skinparam RectangleBorderStyle<<JobMonitoringBotServicesLayerServicesPersistentStorage>> dashed\r
\r
  rectangle "==PersistentStorage\\n\\nFile-based data management" <<JobMonitoringBotServicesLayerServicesPersistentStoragePersistentStorageClass>> as JobMonitoringBotServicesLayerServicesPersistentStoragePersistentStorageClass\r
}\r
rectangle "==Utilities Layer\\n\\nHelper functions and common utilities" <<JobMonitoringBotUtilitiesLayer>> as JobMonitoringBotUtilitiesLayer\r
\r
JobMonitoringBotServicesLayerServicesTelegramService .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesPersistentStoragePersistentStorageClass : "<color:#777777>[...]<color:#777777>"\r
JobMonitoringBotServicesLayerServicesBotHandler .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesPersistentStoragePersistentStorageClass : "<color:#777777>[...]<color:#777777>"\r
JobMonitoringBotServicesLayerServicesPersistentStoragePersistentStorageClass .[#777777,thickness=2].> JobMonitoringBotUtilitiesLayer : "<color:#777777>Uses timestamp utilities<color:#777777>"\r
@enduml\r
`;case"telegramService":return`@startuml\r
title "L4: Telegram Service Worker - Method Implementation"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<JobMonitoringBotApplicationLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotHandlersLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesBotHandler>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClass>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
skinparam rectangle<<JobMonitoringBotConfigurationLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotUtilitiesLayer>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesMessageProcessor>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<JobMonitoringBotServicesLayerServicesPersistentStorage>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
rectangle "==Application Layer\\n\\nEntry point and orchestration logic" <<JobMonitoringBotApplicationLayer>> as JobMonitoringBotApplicationLayer\r
rectangle "==Handlers Layer\\n\\nUser interaction layer" <<JobMonitoringBotHandlersLayer>> as JobMonitoringBotHandlersLayer\r
rectangle "==Bot Handler\\n<size:10>[BotHandler class]</size>\\n\\nUser command processing" <<JobMonitoringBotServicesLayerServicesBotHandler>> as JobMonitoringBotServicesLayerServicesBotHandler\r
rectangle "Telegram Service" <<JobMonitoringBotServicesLayerServicesTelegramService>> as JobMonitoringBotServicesLayerServicesTelegramService {\r
  skinparam RectangleBorderColor<<JobMonitoringBotServicesLayerServicesTelegramService>> #3b82f6\r
  skinparam RectangleFontColor<<JobMonitoringBotServicesLayerServicesTelegramService>> #3b82f6\r
  skinparam RectangleBorderStyle<<JobMonitoringBotServicesLayerServicesTelegramService>> dashed\r
\r
  rectangle "==TelegramService\\n\\nMain service class" <<JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClass>> as JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClass\r
}\r
rectangle "==Configuration Layer\\n\\nSettings and environment management" <<JobMonitoringBotConfigurationLayer>> as JobMonitoringBotConfigurationLayer\r
rectangle "==Utilities Layer\\n\\nHelper functions and common utilities" <<JobMonitoringBotUtilitiesLayer>> as JobMonitoringBotUtilitiesLayer\r
rectangle "==Message Processor\\n<size:10>[MessageProcessor class]</size>\\n\\nMessage filtering and validation" <<JobMonitoringBotServicesLayerServicesMessageProcessor>> as JobMonitoringBotServicesLayerServicesMessageProcessor\r
rectangle "==Persistent Storage\\n<size:10>[JSON file storage]</size>\\n\\nData persistence and retrieval" <<JobMonitoringBotServicesLayerServicesPersistentStorage>> as JobMonitoringBotServicesLayerServicesPersistentStorage\r
\r
JobMonitoringBotApplicationLayer .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClass : "<color:#777777>[...]<color:#777777>"\r
JobMonitoringBotHandlersLayer .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClass : "<color:#777777>[...]<color:#777777>"\r
JobMonitoringBotServicesLayerServicesBotHandler .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClass : "<color:#777777>Retrieves current statistics<color:#777777>"\r
JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClass .[#777777,thickness=2].> JobMonitoringBotConfigurationLayer : "<color:#777777>[...]<color:#777777>"\r
JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClass .[#777777,thickness=2].> JobMonitoringBotUtilitiesLayer : "<color:#777777>Logs message events<color:#777777>"\r
JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClass .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesMessageProcessor : "<color:#777777>[...]<color:#777777>"\r
JobMonitoringBotServicesLayerServicesTelegramServiceTelegramServiceClass .[#777777,thickness=2].> JobMonitoringBotServicesLayerServicesPersistentStorage : "<color:#777777>[...]<color:#777777>"\r
@enduml\r
`;case"navigation":return`@startuml\r
title "Navigation Guide - Drill-Down Structure"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
@enduml\r
`;default:throw new Error("Unknown viewId: "+r)}}export{e as pumlSource};
