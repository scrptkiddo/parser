function t(e){switch(e){case"commandFlow":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=commandFlow,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_handlerslayer {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>HANDLERS LAYER</B></FONT>>,
            likec4_depth=1,
            likec4_id="jobMonitoringBot.handlersLayer",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        starthandler [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">start_command_handler()</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Handler for /start - delegates to<BR/>BotHandler.handle_start_command</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.handlersLayer.handlers.commandsHandler.commandsModule.startHandler",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        statushandler [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">status_command_handler()</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Handler for /status - delegates to<BR/>BotHandler.handle_status_command</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.handlersLayer.handlers.commandsHandler.commandsModule.statusHandler",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        statshandler [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">stats_command_handler()</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Handler for /stats - delegates to<BR/>BotHandler.handle_stats_command</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.handlersLayer.handlers.commandsHandler.commandsModule.statsHandler",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        helphandler [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">help_command_handler()</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Handler for /help - delegates to<BR/>BotHandler.handle_help_command</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.handlersLayer.handlers.commandsHandler.commandsModule.helpHandler",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_serviceslayer {
        graph [color="#1c356c",
            fillcolor="#1c417d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SERVICES LAYER</B></FONT>>,
            likec4_depth=3,
            likec4_id="jobMonitoringBot.servicesLayer",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_bothandler {
            graph [color="#1c3979",
                fillcolor="#1a468d",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BOT HANDLER</B></FONT>>,
                likec4_depth=2,
                likec4_id="jobMonitoringBot.servicesLayer.services.botHandler",
                likec4_level=1,
                margin=32,
                style=filled
            ];
            subgraph cluster_bothandlerclass {
                graph [color="#1b3d88",
                    fillcolor="#194b9e",
                    label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BOTHANDLER</B></FONT>>,
                    likec4_depth=1,
                    likec4_id="jobMonitoringBot.servicesLayer.services.botHandler.botHandlerClass",
                    likec4_level=2,
                    margin=40,
                    style=filled
                ];
                startcommand [group="jobMonitoringBot.servicesLayer.services.botHandler.botHandlerClass",
                    height=2.5,
                    label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">handle_start_command()</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Handle /start command - welcome message and<BR/>instructions</FONT></TD></TR></TABLE>>,
                    likec4_id="jobMonitoringBot.servicesLayer.services.botHandler.botHandlerClass.startCommand",
                    likec4_level=3,
                    margin="0.223,0.223",
                    width=4.445];
                statuscommand [group="jobMonitoringBot.servicesLayer",
                    height=2.5,
                    label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">handle_status_command()</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Handle /status command - show bot operational<BR/>status</FONT></TD></TR></TABLE>>,
                    likec4_id="jobMonitoringBot.servicesLayer.services.botHandler.botHandlerClass.statusCommand",
                    likec4_level=3,
                    margin="0.223,0.223",
                    width=4.445];
                statscommand [group="jobMonitoringBot.servicesLayer.services.botHandler.botHandlerClass",
                    height=2.5,
                    label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">handle_stats_command()</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Handle /stats command - detailed statistics<BR/>and metrics</FONT></TD></TR></TABLE>>,
                    likec4_id="jobMonitoringBot.servicesLayer.services.botHandler.botHandlerClass.statsCommand",
                    likec4_level=3,
                    margin="0.223,0.223",
                    width=4.445];
                helpcommand [height=2.5,
                    label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">handle_help_command()</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Handle /help command - list available<BR/>commands</FONT></TD></TR></TABLE>>,
                    likec4_id="jobMonitoringBot.servicesLayer.services.botHandler.botHandlerClass.helpCommand",
                    likec4_level=3,
                    margin="0.223,0.223",
                    width=4.445];
                updatestats [group="jobMonitoringBot.servicesLayer.services.botHandler.botHandlerClass",
                    height=2.5,
                    label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">update_statistics()</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Update internal statistics counters</FONT></TD></TR></TABLE>>,
                    likec4_id="jobMonitoringBot.servicesLayer.services.botHandler.botHandlerClass.updateStats",
                    likec4_level=3,
                    margin="0.223,0.223",
                    width=4.445];
                formatstats [group="jobMonitoringBot.servicesLayer.services.botHandler.botHandlerClass",
                    height=2.5,
                    label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">format_statistics()</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Format statistics for user display</FONT></TD></TR></TABLE>>,
                    likec4_id="jobMonitoringBot.servicesLayer.services.botHandler.botHandlerClass.formatStats",
                    likec4_level=3,
                    margin="0.223,0.223",
                    width=4.445];
            }
        }
        subgraph cluster_telegramservice {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>TELEGRAM SERVICE</B></FONT>>,
                likec4_depth=1,
                likec4_id="jobMonitoringBot.servicesLayer.services.telegramService",
                likec4_level=1,
                margin=32,
                style=filled
            ];
            getstats [group="jobMonitoringBot.servicesLayer",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">get_statistics()</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Retrieve bot operational statistics</FONT></TD></TR></TABLE>>,
                likec4_id="jobMonitoringBot.servicesLayer.services.telegramService.telegramServiceClass.getStats",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
        }
    }
    botuser [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Bot User</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Users interacting with the bot via Telegram<BR/>commands</FONT></TD></TR></TABLE>>,
        likec4_id=botUser,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    starthandler -> startcommand [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Delegates to bot handler</FONT></TD></TR></TABLE>>,
        likec4_id="7mk7yx",
        minlen=1,
        style=dashed];
    statushandler -> statuscommand [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Delegates to bot handler</FONT></TD></TR></TABLE>>,
        likec4_id=h4kho9,
        minlen=1,
        style=dashed];
    statshandler -> statscommand [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Delegates to bot handler</FONT></TD></TR></TABLE>>,
        likec4_id=ilknt,
        minlen=1,
        style=dashed];
    helphandler -> helpcommand [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Delegates to bot handler</FONT></TD></TR></TABLE>>,
        likec4_id="1abrdy1",
        style=dashed,
        weight=9];
    startcommand -> updatestats [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Updates usage statistics</FONT></TD></TR></TABLE>>,
        likec4_id=x41j8d,
        minlen=1,
        style=dashed,
        weight=9];
    statuscommand -> getstats [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Retrieves current statistics</FONT></TD></TR></TABLE>>,
        likec4_id="1hfclny",
        minlen=1,
        style=dashed,
        weight=5];
    statscommand -> formatstats [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Formats statistics for display</FONT></TD></TR></TABLE>>,
        likec4_id="1xt1232",
        minlen=1,
        style=dashed,
        weight=9];
}
`;case"dataFlow":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=dataFlow,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_telegramservice {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>TELEGRAM SERVICE</B></FONT>>,
            likec4_depth=2,
            likec4_id="jobMonitoringBot.servicesLayer.services.telegramService",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        subgraph cluster_telegramserviceclass {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>TELEGRAMSERVICE</B></FONT>>,
                likec4_depth=1,
                likec4_id="jobMonitoringBot.servicesLayer.services.telegramService.telegramServiceClass",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            processmessage [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">process_new_message()</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Process incoming messages - filter and<BR/>forward if needed</FONT></TD></TR></TABLE>>,
                likec4_id="jobMonitoringBot.servicesLayer.services.telegramService.telegramServiceClass.processMessage",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            forwardmessage [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">forward_message()</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Forward filtered messages to target chat</FONT></TD></TR></TABLE>>,
                likec4_id="jobMonitoringBot.servicesLayer.services.telegramService.telegramServiceClass.forwardMessage",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
        }
    }
    subgraph cluster_messageprocessor {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>MESSAGE PROCESSOR</B></FONT>>,
            likec4_depth=2,
            likec4_id="jobMonitoringBot.servicesLayer.services.messageProcessor",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        subgraph cluster_messageprocessorclass {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>MESSAGEPROCESSOR</B></FONT>>,
                likec4_depth=1,
                likec4_id="jobMonitoringBot.servicesLayer.services.messageProcessor.messageProcessorClass",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            shouldforward [group="jobMonitoringBot.servicesLayer.services.messageProcessor.messageProcessorClass",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">should_forward_message()</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Main filtering logic - combines keyword and<BR/>exclusion checks</FONT></TD></TR></TABLE>>,
                likec4_id="jobMonitoringBot.servicesLayer.services.messageProcessor.messageProcessorClass.shouldForward",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            extractjobinfo [group="jobMonitoringBot.servicesLayer.services.messageProcessor.messageProcessorClass",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">extract_job_info()</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Extract structured job information from<BR/>message text</FONT></TD></TR></TABLE>>,
                likec4_id="jobMonitoringBot.servicesLayer.services.messageProcessor.messageProcessorClass.extractJobInfo",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            containskeywords [group="jobMonitoringBot.servicesLayer.services.messageProcessor.messageProcessorClass",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">contains_keywords()</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Check if message contains required keywords<BR/>(python, developer, etc.)</FONT></TD></TR></TABLE>>,
                likec4_id="jobMonitoringBot.servicesLayer.services.messageProcessor.messageProcessorClass.containsKeywords",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            containsexclusions [group="jobMonitoringBot.servicesLayer.services.messageProcessor.messageProcessorClass",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">contains_exclusion_words()</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Check if message contains exclusion words<BR/>(senior, lead, etc.)</FONT></TD></TR></TABLE>>,
                likec4_id="jobMonitoringBot.servicesLayer.services.messageProcessor.messageProcessorClass.containsExclusions",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            validatemessage [group="jobMonitoringBot.servicesLayer.services.messageProcessor.messageProcessorClass",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">validate_message_format()</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Validate message format and content quality</FONT></TD></TR></TABLE>>,
                likec4_id="jobMonitoringBot.servicesLayer.services.messageProcessor.messageProcessorClass.validateMessage",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
        }
    }
    subgraph cluster_persistentstorage {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>PERSISTENT STORAGE</B></FONT>>,
            likec4_depth=1,
            likec4_id="jobMonitoringBot.servicesLayer.services.persistentStorage",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        isforwarded [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">is_message_forwarded()</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Check if message ID was already forwarded<BR/>(prevent duplicates)</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.servicesLayer.services.persistentStorage.persistentStorageClass.isForwarded",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        addforwarded [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">add_forwarded_message()</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Record newly forwarded message with timestamp</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.servicesLayer.services.persistentStorage.persistentStorageClass.addForwarded",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        cleanupold [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">cleanup_old_entries()</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Remove forwarded message entries older than 7<BR/>days</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.servicesLayer.services.persistentStorage.persistentStorageClass.cleanupOld",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    botuser [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Bot User</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Users interacting with the bot via Telegram<BR/>commands</FONT></TD></TR></TABLE>>,
        likec4_id=botUser,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    sourcechannels [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Source Channels</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Telegram Channels</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Monitored job posting channels (cyithr,<BR/>cyprusithr, relocation_vacancies)</FONT></TD></TR></TABLE>>,
        likec4_id=sourceChannels,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    botuser -> sourcechannels [style=invis];
    targetchat [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Target Chat</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Telegram Chat</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Destination chat where filtered job posts are<BR/>forwarded</FONT></TD></TR></TABLE>>,
        likec4_id=targetChat,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    sourcechannels -> targetchat [style=invis];
    processmessage -> forwardmessage [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Forwards approved messages</FONT></TD></TR></TABLE>>,
        likec4_id="1dq8yje",
        minlen=0,
        style=dashed,
        weight=5];
    processmessage -> shouldforward [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Checks if message should be forwarded</FONT></TD></TR></TABLE>>,
        likec4_id="1wyaw1k",
        style=dashed];
    processmessage -> extractjobinfo [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Extracts job information</FONT></TD></TR></TABLE>>,
        likec4_id=petszy,
        style=dashed];
    processmessage -> isforwarded [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Checks if already forwarded</FONT></TD></TR></TABLE>>,
        likec4_id="1k0lzqi",
        minlen=1,
        style=dashed];
    processmessage -> cleanupold [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Cleans up old entries</FONT></TD></TR></TABLE>>,
        likec4_id=dn128d,
        minlen=1,
        style=dashed];
    forwardmessage -> addforwarded [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Records forwarded message</FONT></TD></TR></TABLE>>,
        likec4_id="1t69xc1",
        minlen=1,
        style=dashed];
    shouldforward -> containskeywords [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Validates required keywords</FONT></TD></TR></TABLE>>,
        likec4_id="7g4ump",
        minlen=1,
        style=dashed,
        weight=5];
    shouldforward -> containsexclusions [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Checks exclusion words</FONT></TD></TR></TABLE>>,
        likec4_id=n13eus,
        minlen=1,
        style=dashed,
        weight=5];
    extractjobinfo -> validatemessage [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Validates extracted data</FONT></TD></TR></TABLE>>,
        likec4_id="1nvsmqr",
        minlen=1,
        style=dashed,
        weight=5];
}
`;case"index":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=index,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    botuser [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Bot User</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Users interacting with the bot via Telegram<BR/>commands</FONT></TD></TR></TABLE>>,
        likec4_id=botUser,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    jobmonitoringbot [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Job Monitoring Bot</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Python, Telethon, python-telegram-bot</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Telegram bot that monitors job channels and<BR/>forwards relevant posts</FONT></TD></TR></TABLE>>,
        likec4_id=jobMonitoringBot,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    botuser -> jobmonitoringbot [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses bot commands</FONT></TD></TR></TABLE>>,
        likec4_id=izqfow,
        minlen=1,
        style=dashed];
    telegramplatform [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Telegram Platform</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Telegram API</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">External Telegram messaging platform and API</FONT></TD></TR></TABLE>>,
        likec4_id=telegramPlatform,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    jobmonitoringbot -> telegramplatform [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Connects via API</FONT></TD></TR></TABLE>>,
        likec4_id="1x3qgzq",
        minlen=1,
        style=dashed];
    sourcechannels [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Source Channels</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Telegram Channels</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Monitored job posting channels (cyithr,<BR/>cyprusithr, relocation_vacancies)</FONT></TD></TR></TABLE>>,
        likec4_id=sourceChannels,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    jobmonitoringbot -> sourcechannels [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Monitors for new messages</FONT></TD></TR></TABLE>>,
        likec4_id="1jnbqz9",
        minlen=1,
        style=dashed];
    targetchat [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Target Chat</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Telegram Chat</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Destination chat where filtered job posts are<BR/>forwarded</FONT></TD></TR></TABLE>>,
        likec4_id=targetChat,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    jobmonitoringbot -> targetchat [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Forwards filtered messages</FONT></TD></TR></TABLE>>,
        likec4_id="1x3gzx3",
        minlen=1,
        style=dashed];
}
`;case"jobMonitoringBot":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=jobMonitoringBot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_jobmonitoringbot {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>JOB MONITORING BOT</B></FONT>>,
            likec4_depth=1,
            likec4_id=jobMonitoringBot,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        applicationlayer [group=jobMonitoringBot,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Application Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Entry point and orchestration logic</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.applicationLayer",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        handlerslayer [group=jobMonitoringBot,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Handlers Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">User interaction layer</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.handlersLayer",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        serviceslayer [group=jobMonitoringBot,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Services Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Core business logic services</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.servicesLayer",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        configurationlayer [group=jobMonitoringBot,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Configuration Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Settings and environment management</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.configurationLayer",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        utilitieslayer [group=jobMonitoringBot,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Utilities Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Helper functions and common utilities</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.utilitiesLayer",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        datalayer [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Data Storage Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">File-based persistence layer</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.dataLayer",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    applicationlayer -> serviceslayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=c97o72,
        style=dashed];
    applicationlayer -> utilitieslayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Configures application logging</FONT></TD></TR></TABLE>>,
        likec4_id=i0y4hi,
        style=dashed];
    handlerslayer -> serviceslayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=upsff3,
        style=dashed];
    handlerslayer -> utilitieslayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Logs command errors</FONT></TD></TR></TABLE>>,
        likec4_id=tz85k7,
        style=dashed];
    serviceslayer -> configurationlayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1gm1z3o",
        minlen=1,
        style=dashed];
    serviceslayer -> utilitieslayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1d5c4te",
        style=dashed];
}
`;case"applicationLayer":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=applicationLayer,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_applicationlayer {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>APPLICATION LAYER</B></FONT>>,
            likec4_depth=1,
            likec4_id="jobMonitoringBot.applicationLayer",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        mainapp [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Main Application</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Python, asyncio</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Entry point and orchestrator</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.applicationLayer.mainApp",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        botcore [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Bot Core</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Python, JobMonitoringBot class</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Main bot coordination logic</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.applicationLayer.botCore",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    mainapp -> botcore [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=lgxbqa,
        minlen=0,
        style=dashed,
        weight=2];
    utilitieslayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Utilities Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Helper functions and common utilities</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.utilitiesLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mainapp -> utilitieslayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Configures application logging</FONT></TD></TR></TABLE>>,
        likec4_id="1ty2642",
        minlen=1,
        style=dashed];
    serviceslayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Services Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Core business logic services</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.servicesLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    botcore -> serviceslayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=jgezv6,
        minlen=1,
        style=dashed];
}
`;case"configurationLayer":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=configurationLayer,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_configurationlayer {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CONFIGURATION LAYER</B></FONT>>,
            likec4_depth=1,
            likec4_id="jobMonitoringBot.configurationLayer",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        configuration [color="#475569",
            fillcolor="#64748b",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Configuration</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#cbd5e1">Settings module</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Settings and environment management</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.configurationLayer.configuration",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    serviceslayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Services Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Core business logic services</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.servicesLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    serviceslayer -> configuration [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=qw1jm2,
        style=dashed,
        weight=2];
}
`;case"dataLayer":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=dataLayer,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_datalayer {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>DATA STORAGE LAYER</B></FONT>>,
            likec4_depth=1,
            likec4_id="jobMonitoringBot.dataLayer",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        datastorage [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Data Storage</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">JSON files</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">File-based persistence layer</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.dataLayer.dataStorage",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
}
`;case"handlersLayer":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=handlersLayer,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_handlerslayer {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>HANDLERS LAYER</B></FONT>>,
            likec4_depth=1,
            likec4_id="jobMonitoringBot.handlersLayer",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        handlers [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Command Handlers</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">python-telegram-bot handlers</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">User interaction layer</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.handlersLayer.handlers",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    serviceslayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Services Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Core business logic services</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.servicesLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    handlers -> serviceslayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1rikv62",
        minlen=1,
        style=dashed];
    utilitieslayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Utilities Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Helper functions and common utilities</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.utilitiesLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    handlers -> utilitieslayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Logs command errors</FONT></TD></TR></TABLE>>,
        likec4_id=d2m002,
        minlen=1,
        style=dashed];
}
`;case"servicesLayer":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=servicesLayer,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_serviceslayer {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SERVICES LAYER</B></FONT>>,
            likec4_depth=1,
            likec4_id="jobMonitoringBot.servicesLayer",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        services [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Services</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Python services</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Business logic service classes</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.servicesLayer.services",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    applicationlayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Application Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Entry point and orchestration logic</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.applicationLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    applicationlayer -> services [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=k7ucce,
        minlen=1,
        style=dashed];
    handlerslayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Handlers Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">User interaction layer</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.handlersLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    handlerslayer -> services [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=a4j99r,
        minlen=1,
        style=dashed];
    configurationlayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Configuration Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Settings and environment management</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.configurationLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    services -> configurationlayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="11dbd90",
        minlen=1,
        style=dashed];
    utilitieslayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Utilities Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Helper functions and common utilities</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.utilitiesLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    services -> utilitieslayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=b4cu9u,
        minlen=1,
        style=dashed];
}
`;case"utilitiesLayer":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=utilitiesLayer,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_utilitieslayer {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UTILITIES LAYER</B></FONT>>,
            likec4_depth=1,
            likec4_id="jobMonitoringBot.utilitiesLayer",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        utilities [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Utilities</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Python utility modules</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Helper functions and common utilities</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.utilitiesLayer.utilities",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    applicationlayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Application Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Entry point and orchestration logic</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.applicationLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    applicationlayer -> utilities [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Configures application logging</FONT></TD></TR></TABLE>>,
        likec4_id=gy087y,
        minlen=1,
        style=dashed];
    serviceslayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Services Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Core business logic services</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.servicesLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    serviceslayer -> utilities [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="8l0s3u",
        minlen=1,
        style=dashed];
    handlerslayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Handlers Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">User interaction layer</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.handlersLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    handlerslayer -> utilities [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Logs command errors</FONT></TD></TR></TABLE>>,
        likec4_id="1qfmgy7",
        minlen=1,
        style=dashed];
}
`;case"botCore":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=botCore,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_botcore {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BOT CORE</B></FONT>>,
            likec4_depth=1,
            likec4_id="jobMonitoringBot.applicationLayer.botCore",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        botmodule [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">bot.py</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Core bot implementation</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.applicationLayer.botCore.botModule",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    mainapp [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Main Application</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Python, asyncio</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Entry point and orchestrator</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.applicationLayer.mainApp",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mainapp -> botmodule [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=ewxu1b,
        minlen=1,
        style=dashed,
        weight=2];
    serviceslayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Services Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Core business logic services</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.servicesLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    botmodule -> serviceslayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=cm6fkv,
        minlen=1,
        style=dashed];
}
`;case"configuration":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=configuration,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_configuration {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CONFIGURATION</B></FONT>>,
            likec4_depth=1,
            likec4_id="jobMonitoringBot.configurationLayer.configuration",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        settingsmodule [color="#475569",
            fillcolor="#64748b",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Settings Module</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#cbd5e1">Python dataclass</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Configuration management</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.configurationLayer.configuration.settingsModule",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    serviceslayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Services Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Core business logic services</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.servicesLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    serviceslayer -> settingsmodule [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1pp853v",
        style=dashed,
        weight=3];
}
`;case"dataStorage":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=dataStorage,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_datastorage {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>DATA STORAGE</B></FONT>>,
            likec4_depth=1,
            likec4_id="jobMonitoringBot.dataLayer.dataStorage",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            forwardedmessages [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Forwarded Messages Store</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">JSON file with message_id, timestamp,</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">forwarded_messages.json - tracks all<BR/>forwarded message IDs with timestamps</FONT></TD></TR></TABLE>>,
                likec4_id="jobMonitoringBot.dataLayer.dataStorage.forwardedMessages",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            botstate [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Bot State Store</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">JSON file with counters, last_run,</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">bot_state.json - maintains operational state<BR/>and statistics</FONT></TD></TR></TABLE>>,
                likec4_id="jobMonitoringBot.dataLayer.dataStorage.botState",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            configcache [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Config Cache</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">In-memory cache with file backup</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Cached configuration data for performance</FONT></TD></TR></TABLE>>,
                likec4_id="jobMonitoringBot.dataLayer.dataStorage.configCache",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            logs [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Log Files</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Rotating log files with timestamps</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Application and error logs</FONT></TD></TR></TABLE>>,
                likec4_id="jobMonitoringBot.dataLayer.dataStorage.logs",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        forwardedmessages -> configcache [style=invis];
    }
    botstate -> logs [style=invis];
}
`;case"handlers":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=handlers,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_handlers {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>COMMAND HANDLERS</B></FONT>>,
            likec4_depth=1,
            likec4_id="jobMonitoringBot.handlersLayer.handlers",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        commandshandler [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Commands Handler</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Commands module</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Command processing interface</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.handlersLayer.handlers.commandsHandler",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        messagehandler [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Message Handler</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Messages module</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Message processing interface</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.handlersLayer.handlers.messageHandler",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    utilitieslayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Utilities Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Helper functions and common utilities</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.utilitiesLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    commandshandler -> utilitieslayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Logs command errors</FONT></TD></TR></TABLE>>,
        likec4_id=tegukg,
        minlen=1,
        style=dashed];
    serviceslayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Services Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Core business logic services</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.servicesLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    commandshandler -> serviceslayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Delegates to bot handler</FONT></TD></TR></TABLE>>,
        likec4_id=hkne88,
        style=dashed];
    messagehandler -> serviceslayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="51o4wn",
        minlen=1,
        style=dashed];
}
`;case"mainApp":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=mainApp,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_mainapp {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>MAIN APPLICATION</B></FONT>>,
            likec4_depth=1,
            likec4_id="jobMonitoringBot.applicationLayer.mainApp",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        mainmodule [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">main.py</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Application entry point</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.applicationLayer.mainApp.mainModule",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    utilitieslayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Utilities Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Helper functions and common utilities</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.utilitiesLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mainmodule -> utilitieslayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Configures application logging</FONT></TD></TR></TABLE>>,
        likec4_id=fh3q0d,
        minlen=1,
        style=dashed];
    botcore [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Bot Core</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Python, JobMonitoringBot class</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Main bot coordination logic</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.applicationLayer.botCore",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mainmodule -> botcore [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1u96ngd",
        minlen=1,
        style=dashed,
        weight=2];
}
`;case"services":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=services,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_services {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SERVICES</B></FONT>>,
            likec4_depth=1,
            likec4_id="jobMonitoringBot.servicesLayer.services",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        bothandler [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            group="jobMonitoringBot.servicesLayer.services",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Bot Handler</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">BotHandler class</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">User command processing</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.servicesLayer.services.botHandler",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        telegramservice [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            group="jobMonitoringBot.servicesLayer.services",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Telegram Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">Telethon TelegramService class</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Handles all Telegram operations</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.servicesLayer.services.telegramService",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        messageprocessor [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            group="jobMonitoringBot.servicesLayer.services",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Message Processor</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">MessageProcessor class</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Message filtering and validation</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.servicesLayer.services.messageProcessor",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        persistentstorage [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            group="jobMonitoringBot.servicesLayer.services",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Persistent Storage</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">JSON file storage</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Data persistence and retrieval</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.servicesLayer.services.persistentStorage",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    applicationlayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Application Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Entry point and orchestration logic</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.applicationLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    applicationlayer -> telegramservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="3ivkh8",
        minlen=1,
        style=dashed];
    handlerslayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Handlers Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">User interaction layer</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.handlersLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    handlerslayer -> bothandler [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Delegates to bot handler</FONT></TD></TR></TABLE>>,
        likec4_id="1msm9j4",
        style=dashed];
    handlerslayer -> telegramservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="18klsl9",
        style=dashed];
    bothandler -> telegramservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Retrieves current statistics</FONT></TD></TR></TABLE>>,
        likec4_id=mixxmf,
        style=dashed,
        weight=3];
    bothandler -> persistentstorage [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=izopbr,
        style=dashed,
        weight=3];
    utilitieslayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Utilities Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Helper functions and common utilities</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.utilitiesLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    bothandler -> utilitieslayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses formatting utilities</FONT></TD></TR></TABLE>>,
        likec4_id="1ersugd",
        style=dashed];
    telegramservice -> messageprocessor [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="6dx1pn",
        style=dashed,
        weight=3];
    telegramservice -> persistentstorage [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1ks20ay",
        style=dashed,
        weight=3];
    configurationlayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Configuration Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Settings and environment management</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.configurationLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    telegramservice -> configurationlayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=rf818m,
        style=dashed];
    telegramservice -> utilitieslayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Logs message events</FONT></TD></TR></TABLE>>,
        likec4_id="17fr26o",
        style=dashed];
    messageprocessor -> configurationlayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses keyword filtering rules</FONT></TD></TR></TABLE>>,
        likec4_id=b9r1l3,
        style=dashed];
    persistentstorage -> utilitieslayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses timestamp utilities</FONT></TD></TR></TABLE>>,
        likec4_id=vl3500,
        style=dashed];
}
`;case"utilities":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=utilities,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_utilities {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UTILITIES</B></FONT>>,
            likec4_depth=1,
            likec4_id="jobMonitoringBot.utilitiesLayer.utilities",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        loggingmodule [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Logging</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Logging configuration and utilities</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.utilitiesLayer.utilities.loggingModule",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        helpersmodule [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Helpers</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Common utility functions</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.utilitiesLayer.utilities.helpersModule",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    applicationlayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Application Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Entry point and orchestration logic</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.applicationLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    applicationlayer -> loggingmodule [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Configures application logging</FONT></TD></TR></TABLE>>,
        likec4_id="1sxslmx",
        minlen=1,
        style=dashed];
    serviceslayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Services Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Core business logic services</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.servicesLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    serviceslayer -> loggingmodule [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Logs message events</FONT></TD></TR></TABLE>>,
        likec4_id="1npz3kt",
        style=dashed];
    serviceslayer -> helpersmodule [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=bn4je3,
        minlen=1,
        style=dashed];
    handlerslayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Handlers Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">User interaction layer</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.handlersLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    handlerslayer -> loggingmodule [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Logs command errors</FONT></TD></TR></TABLE>>,
        likec4_id="1sxztco",
        minlen=1,
        style=dashed];
}
`;case"botHandler":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=botHandler,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_bothandler {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BOT HANDLER</B></FONT>>,
            likec4_depth=1,
            likec4_id="jobMonitoringBot.servicesLayer.services.botHandler",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        bothandlerclass [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">BotHandler</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Command handler implementation</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.servicesLayer.services.botHandler.botHandlerClass",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    handlerslayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Handlers Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">User interaction layer</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.handlersLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    handlerslayer -> bothandlerclass [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Delegates to bot handler</FONT></TD></TR></TABLE>>,
        likec4_id="8gycg1",
        minlen=1,
        style=dashed];
    utilitieslayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Utilities Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Helper functions and common utilities</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.utilitiesLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    bothandlerclass -> utilitieslayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses formatting utilities</FONT></TD></TR></TABLE>>,
        likec4_id="1dure3w",
        minlen=1,
        style=dashed];
    telegramservice [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Telegram Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Telethon TelegramService class</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Handles all Telegram operations</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.servicesLayer.services.telegramService",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    bothandlerclass -> telegramservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Retrieves current statistics</FONT></TD></TR></TABLE>>,
        likec4_id="1745jp2",
        minlen=1,
        style=dashed,
        weight=3];
    persistentstorage [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Persistent Storage</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">JSON file storage</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Data persistence and retrieval</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.servicesLayer.services.persistentStorage",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    bothandlerclass -> persistentstorage [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1io1kxi",
        minlen=1,
        style=dashed,
        weight=3];
}
`;case"commandsHandler":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=commandsHandler,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_commandshandler {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>COMMANDS HANDLER</B></FONT>>,
            likec4_depth=1,
            likec4_id="jobMonitoringBot.handlersLayer.handlers.commandsHandler",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        commandsmodule [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">commands.py</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Command handler implementations</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.handlersLayer.handlers.commandsHandler.commandsModule",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    serviceslayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Services Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Core business logic services</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.servicesLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    commandsmodule -> serviceslayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Delegates to bot handler</FONT></TD></TR></TABLE>>,
        likec4_id="4ceeg",
        minlen=1,
        style=dashed];
    utilitieslayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Utilities Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Helper functions and common utilities</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.utilitiesLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    commandsmodule -> utilitieslayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Logs command errors</FONT></TD></TR></TABLE>>,
        likec4_id="1kk5sm8",
        minlen=1,
        style=dashed];
}
`;case"messageHandler":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=messageHandler,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_messagehandler {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>MESSAGE HANDLER</B></FONT>>,
            likec4_depth=1,
            likec4_id="jobMonitoringBot.handlersLayer.handlers.messageHandler",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        messagesmodule [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">messages.py</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Message processing implementations</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.handlersLayer.handlers.messageHandler.messagesModule",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    serviceslayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Services Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Core business logic services</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.servicesLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    messagesmodule -> serviceslayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1ezz2ij",
        style=dashed,
        weight=4];
}
`;case"messageProcessor":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=messageProcessor,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_messageprocessor {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>MESSAGE PROCESSOR</B></FONT>>,
            likec4_depth=1,
            likec4_id="jobMonitoringBot.servicesLayer.services.messageProcessor",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        messageprocessorclass [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">MessageProcessor</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Static filtering logic</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.servicesLayer.services.messageProcessor.messageProcessorClass",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    telegramservice [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Telegram Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Telethon TelegramService class</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Handles all Telegram operations</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.servicesLayer.services.telegramService",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    telegramservice -> messageprocessorclass [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=yi9hau,
        minlen=1,
        style=dashed,
        weight=3];
    configurationlayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Configuration Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Settings and environment management</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.configurationLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    messageprocessorclass -> configurationlayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses keyword filtering rules</FONT></TD></TR></TABLE>>,
        likec4_id="1lu5sfu",
        minlen=1,
        style=dashed];
}
`;case"persistentStorage":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=persistentStorage,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_persistentstorage {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>PERSISTENT STORAGE</B></FONT>>,
            likec4_depth=1,
            likec4_id="jobMonitoringBot.servicesLayer.services.persistentStorage",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        persistentstorageclass [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">PersistentStorage</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">File-based data management</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.servicesLayer.services.persistentStorage.persistentStorageClass",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    telegramservice [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Telegram Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Telethon TelegramService class</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Handles all Telegram operations</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.servicesLayer.services.telegramService",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    telegramservice -> persistentstorageclass [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=kq4nw6,
        minlen=1,
        style=dashed,
        weight=3];
    bothandler [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Bot Handler</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">BotHandler class</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">User command processing</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.servicesLayer.services.botHandler",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    bothandler -> persistentstorageclass [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="168gw6j",
        minlen=1,
        style=dashed,
        weight=3];
    utilitieslayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Utilities Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Helper functions and common utilities</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.utilitiesLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    persistentstorageclass -> utilitieslayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses timestamp utilities</FONT></TD></TR></TABLE>>,
        likec4_id="15f6z9o",
        minlen=1,
        style=dashed];
}
`;case"telegramService":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=telegramService,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_telegramservice {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>TELEGRAM SERVICE</B></FONT>>,
            likec4_depth=1,
            likec4_id="jobMonitoringBot.servicesLayer.services.telegramService",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        telegramserviceclass [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">TelegramService</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Main service class</FONT></TD></TR></TABLE>>,
            likec4_id="jobMonitoringBot.servicesLayer.services.telegramService.telegramServiceClass",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    applicationlayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Application Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Entry point and orchestration logic</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.applicationLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    applicationlayer -> telegramserviceclass [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1xdb5w0",
        minlen=1,
        style=dashed];
    handlerslayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Handlers Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">User interaction layer</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.handlersLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    handlerslayer -> telegramserviceclass [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1xbruzl",
        minlen=1,
        style=dashed];
    bothandler [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Bot Handler</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">BotHandler class</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">User command processing</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.servicesLayer.services.botHandler",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    bothandler -> telegramserviceclass [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Retrieves current statistics</FONT></TD></TR></TABLE>>,
        likec4_id="11q8j1n",
        minlen=1,
        style=dashed,
        weight=3];
    configurationlayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Configuration Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Settings and environment management</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.configurationLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    telegramserviceclass -> configurationlayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=e5vz8a,
        minlen=1,
        style=dashed];
    utilitieslayer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Utilities Layer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Helper functions and common utilities</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.utilitiesLayer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    telegramserviceclass -> utilitieslayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Logs message events</FONT></TD></TR></TABLE>>,
        likec4_id="1ycng5o",
        minlen=1,
        style=dashed];
    messageprocessor [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Message Processor</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">MessageProcessor class</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Message filtering and validation</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.servicesLayer.services.messageProcessor",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    telegramserviceclass -> messageprocessor [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=qrqawn,
        minlen=1,
        style=dashed,
        weight=3];
    persistentstorage [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Persistent Storage</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">JSON file storage</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Data persistence and retrieval</FONT></TD></TR></TABLE>>,
        likec4_id="jobMonitoringBot.servicesLayer.services.persistentStorage",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    telegramserviceclass -> persistentstorage [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="276dp2",
        minlen=1,
        style=dashed,
        weight=3];
}
`;case"navigation":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=navigation,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
}
`;default:throw new Error("Unknown viewId: "+e)}}function n(e){switch(e){case"commandFlow":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1843pt" height="1688pt"
 viewBox="0.00 0.00 1843.43 1688.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1673.05)">
<g id="clust1" class="cluster">
<title>cluster_handlerslayer</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-80 8,-1231 408.04,-1231 408.04,-80 8,-80"/>
<text text-anchor="start" x="16" y="-1218.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">HANDLERS LAYER</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_serviceslayer</title>
<polygon fill="#1c417d" stroke="#1c356c" points="596.77,-8 596.77,-1650 1805.33,-1650 1805.33,-8 596.77,-8"/>
<text text-anchor="start" x="604.77" y="-1637.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SERVICES LAYER</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_bothandler</title>
<polygon fill="#1a468d" stroke="#1c3979" points="636.77,-48 636.77,-1284 1765.33,-1284 1765.33,-48 636.77,-48"/>
<text text-anchor="start" x="644.77" y="-1271.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BOT HANDLER</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_bothandlerclass</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="668.77,-80 668.77,-1231 1733.33,-1231 1733.33,-80 668.77,-80"/>
<text text-anchor="start" x="676.77" y="-1218.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BOTHANDLER</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_telegramservice</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1341.29,-1324 1341.29,-1589 1725.33,-1589 1725.33,-1324 1341.29,-1324"/>
<text text-anchor="start" x="1349.29" y="-1576.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">TELEGRAM SERVICE</text>
</g>
<!-- starthandler -->
<g id="node1" class="node">
<title>starthandler</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.04,-880 48,-880 48,-700 368.04,-700 368.04,-880"/>
<text text-anchor="start" x="99.25" y="-804.3" font-family="Arial" font-size="19.00" fill="#eff6ff">start_command_handler()</text>
<text text-anchor="start" x="104.63" y="-781.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Handler for /start &#45; delegates to</text>
<text text-anchor="start" x="90.03" y="-763.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">BotHandler.handle_start_command</text>
</g>
<!-- statushandler -->
<g id="node2" class="node">
<title>statushandler</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.04,-1170 48,-1170 48,-990 368.04,-990 368.04,-1170"/>
<text text-anchor="start" x="92.38" y="-1094.3" font-family="Arial" font-size="19.00" fill="#eff6ff">status_command_handler()</text>
<text text-anchor="start" x="99.21" y="-1071.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Handler for /status &#45; delegates to</text>
<text text-anchor="start" x="84.61" y="-1053.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">BotHandler.handle_status_command</text>
</g>
<!-- statshandler -->
<g id="node3" class="node">
<title>statshandler</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.04,-590 48,-590 48,-410 368.04,-410 368.04,-590"/>
<text text-anchor="start" x="97.66" y="-514.3" font-family="Arial" font-size="19.00" fill="#eff6ff">stats_command_handler()</text>
<text text-anchor="start" x="103.38" y="-491.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Handler for /stats &#45; delegates to</text>
<text text-anchor="start" x="88.78" y="-473.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">BotHandler.handle_stats_command</text>
</g>
<!-- helphandler -->
<g id="node4" class="node">
<title>helphandler</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.04,-300 48,-300 48,-120 368.04,-120 368.04,-300"/>
<text text-anchor="start" x="99.76" y="-224.3" font-family="Arial" font-size="19.00" fill="#eff6ff">help_command_handler()</text>
<text text-anchor="start" x="105.04" y="-201.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Handler for /help &#45; delegates to</text>
<text text-anchor="start" x="90.44" y="-183.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">BotHandler.handle_help_command</text>
</g>
<!-- startcommand -->
<g id="node5" class="node">
<title>startcommand</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1070.7,-880 708.77,-880 708.77,-700 1070.7,-700 1070.7,-880"/>
<text text-anchor="start" x="784.12" y="-804.3" font-family="Arial" font-size="19.00" fill="#eff6ff">handle_start_command()</text>
<text text-anchor="start" x="728.83" y="-781.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Handle /start command &#45; welcome message and</text>
<text text-anchor="start" x="851.8" y="-763.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">instructions</text>
</g>
<!-- statuscommand -->
<g id="node6" class="node">
<title>statuscommand</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1068.63,-1170 710.84,-1170 710.84,-990 1068.63,-990 1068.63,-1170"/>
<text text-anchor="start" x="777.25" y="-1094.3" font-family="Arial" font-size="19.00" fill="#eff6ff">handle_status_command()</text>
<text text-anchor="start" x="730.9" y="-1071.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Handle /status command &#45; show bot operational</text>
<text text-anchor="start" x="869.72" y="-1053.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">status</text>
</g>
<!-- statscommand -->
<g id="node7" class="node">
<title>statscommand</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1052.35,-590 727.12,-590 727.12,-410 1052.35,-410 1052.35,-590"/>
<text text-anchor="start" x="782.54" y="-514.3" font-family="Arial" font-size="19.00" fill="#eff6ff">handle_stats_command()</text>
<text text-anchor="start" x="747.17" y="-491.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Handle /stats command &#45; detailed statistics</text>
<text text-anchor="start" x="850.97" y="-473.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">and metrics</text>
</g>
<!-- helpcommand -->
<g id="node8" class="node">
<title>helpcommand</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1049.75,-300 729.71,-300 729.71,-120 1049.75,-120 1049.75,-300"/>
<text text-anchor="start" x="784.64" y="-224.3" font-family="Arial" font-size="19.00" fill="#eff6ff">handle_help_command()</text>
<text text-anchor="start" x="765.09" y="-201.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Handle /help command &#45; list available</text>
<text text-anchor="start" x="853.05" y="-183.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">commands</text>
</g>
<!-- updatestats -->
<g id="node9" class="node">
<title>updatestats</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1693.33,-880 1373.29,-880 1373.29,-700 1693.33,-700 1693.33,-880"/>
<text text-anchor="start" x="1456.22" y="-795.3" font-family="Arial" font-size="19.00" fill="#eff6ff">update_statistics()</text>
<text text-anchor="start" x="1420.76" y="-772.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Update internal statistics counters</text>
</g>
<!-- formatstats -->
<g id="node10" class="node">
<title>formatstats</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1693.33,-590 1373.29,-590 1373.29,-410 1693.33,-410 1693.33,-590"/>
<text text-anchor="start" x="1458.36" y="-505.3" font-family="Arial" font-size="19.00" fill="#eff6ff">format_statistics()</text>
<text text-anchor="start" x="1425.78" y="-482.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Format statistics for user display</text>
</g>
<!-- getstats -->
<g id="node11" class="node">
<title>getstats</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1693.33,-1536 1373.29,-1536 1373.29,-1356 1693.33,-1356 1693.33,-1536"/>
<text text-anchor="start" x="1472.07" y="-1451.3" font-family="Arial" font-size="19.00" fill="#eff6ff">get_statistics()</text>
<text text-anchor="start" x="1422.84" y="-1428.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Retrieve bot operational statistics</text>
</g>
<!-- botuser -->
<g id="node12" class="node">
<title>botuser</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="370.22,-1460 45.82,-1460 45.82,-1280 370.22,-1280 370.22,-1460"/>
<text text-anchor="start" x="171.06" y="-1384.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Bot User</text>
<text text-anchor="start" x="65.88" y="-1361.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Users interacting with the bot via Telegram</text>
<text text-anchor="start" x="171.34" y="-1343.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">commands</text>
</g>
<!-- starthandler&#45;&gt;startcommand -->
<g id="edge1" class="edge">
<title>starthandler&#45;&gt;startcommand</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M367.95,-790C466.77,-790 594.39,-790 698.56,-790"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="698.36,-792.63 705.86,-790 698.36,-787.38 698.36,-792.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="430.22,-790 430.22,-812.8 588.77,-812.8 588.77,-790 430.22,-790"/>
<text text-anchor="start" x="433.22" y="-797.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Delegates to bot handler</text>
</g>
<!-- statushandler&#45;&gt;statuscommand -->
<g id="edge2" class="edge">
<title>statushandler&#45;&gt;statuscommand</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M367.95,-1080C467.43,-1080 596.1,-1080 700.66,-1080"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="700.49,-1082.63 707.99,-1080 700.49,-1077.38 700.49,-1082.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="430.22,-1080 430.22,-1102.8 588.77,-1102.8 588.77,-1080 430.22,-1080"/>
<text text-anchor="start" x="433.22" y="-1087.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Delegates to bot handler</text>
</g>
<!-- statshandler&#45;&gt;statscommand -->
<g id="edge3" class="edge">
<title>statshandler&#45;&gt;statscommand</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M367.95,-500C472.66,-500 609.72,-500 716.94,-500"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="716.7,-502.63 724.2,-500 716.7,-497.38 716.7,-502.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="430.22,-500 430.22,-522.8 588.77,-522.8 588.77,-500 430.22,-500"/>
<text text-anchor="start" x="433.22" y="-507.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Delegates to bot handler</text>
</g>
<!-- helphandler&#45;&gt;helpcommand -->
<g id="edge4" class="edge">
<title>helphandler&#45;&gt;helpcommand</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M367.95,-210C473.52,-210 611.96,-210 719.56,-210"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="719.35,-212.63 726.85,-210 719.35,-207.38 719.35,-212.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="430.22,-210 430.22,-232.8 588.77,-232.8 588.77,-210 430.22,-210"/>
<text text-anchor="start" x="433.22" y="-217.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Delegates to bot handler</text>
</g>
<!-- startcommand&#45;&gt;updatestats -->
<g id="edge5" class="edge">
<title>startcommand&#45;&gt;updatestats</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1070.3,-790C1162.04,-790 1273.03,-790 1363.23,-790"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1363.03,-792.63 1370.53,-790 1363.03,-787.38 1363.03,-792.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1143.12,-790 1143.12,-812.8 1300.87,-812.8 1300.87,-790 1143.12,-790"/>
<text text-anchor="start" x="1146.12" y="-797.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Updates usage statistics</text>
</g>
<!-- statuscommand&#45;&gt;getstats -->
<g id="edge6" class="edge">
<title>statuscommand&#45;&gt;getstats</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1048.09,-1169.77C1144.42,-1224.72 1267.58,-1294.98 1365.58,-1350.88"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1364.24,-1353.14 1372.05,-1354.58 1366.84,-1348.58 1364.24,-1353.14"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1136.92,-1317.17 1136.92,-1339.97 1307.07,-1339.97 1307.07,-1317.17 1136.92,-1317.17"/>
<text text-anchor="start" x="1139.92" y="-1324.37" font-family="Arial" font-size="14.00" fill="#c6c6c6">Retrieves current statistics</text>
</g>
<!-- statscommand&#45;&gt;formatstats -->
<g id="edge7" class="edge">
<title>statscommand&#45;&gt;formatstats</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1052.22,-500C1147.04,-500 1266.75,-500 1362.91,-500"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1362.8,-502.63 1370.3,-500 1362.8,-497.38 1362.8,-502.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1130.7,-500 1130.7,-522.8 1313.29,-522.8 1313.29,-500 1130.7,-500"/>
<text text-anchor="start" x="1133.7" y="-507.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Formats statistics for display</text>
</g>
</g>
</svg>
`;case"dataFlow":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1924pt" height="2085pt"
 viewBox="0.00 0.00 1924.19 2085.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 2070.05)">
<g id="clust1" class="cluster">
<title>cluster_telegramservice</title>
<polygon fill="#1a468d" stroke="#1c3979" points="8,-243 8,-922 472.04,-922 472.04,-243 8,-243"/>
<text text-anchor="start" x="16" y="-909.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">TELEGRAM SERVICE</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_telegramserviceclass</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="40,-275 40,-869 440.04,-869 440.04,-275 40,-275"/>
<text text-anchor="start" x="48" y="-856.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">TELEGRAMSERVICE</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_messageprocessor</title>
<polygon fill="#1a468d" stroke="#1c3979" points="745.15,-877 745.15,-1843 1886.1,-1843 1886.1,-877 745.15,-877"/>
<text text-anchor="start" x="753.15" y="-1830.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">MESSAGE PROCESSOR</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_messageprocessorclass</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="777.15,-909 777.15,-1790 1854.1,-1790 1854.1,-909 777.15,-909"/>
<text text-anchor="start" x="785.15" y="-1777.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">MESSAGEPROCESSOR</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_persistentstorage</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="755.06,-8 755.06,-869 1206.14,-869 1206.14,-8 755.06,-8"/>
<text text-anchor="start" x="763.06" y="-856.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">PERSISTENT STORAGE</text>
</g>
<!-- processmessage -->
<g id="node1" class="node">
<title>processmessage</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="400.04,-808 80,-808 80,-628 400.04,-628 400.04,-808"/>
<text text-anchor="start" x="133.89" y="-732.3" font-family="Arial" font-size="19.00" fill="#eff6ff">process_new_message()</text>
<text text-anchor="start" x="109.13" y="-709.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Process incoming messages &#45; filter and</text>
<text text-anchor="start" x="182.07" y="-691.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">forward if needed</text>
</g>
<!-- forwardmessage -->
<g id="node2" class="node">
<title>forwardmessage</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="400.04,-495 80,-495 80,-315 400.04,-315 400.04,-495"/>
<text text-anchor="start" x="158.18" y="-410.3" font-family="Arial" font-size="19.00" fill="#eff6ff">forward_message()</text>
<text text-anchor="start" x="105.79" y="-387.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Forward filtered messages to target chat</text>
</g>
<!-- shouldforward -->
<g id="node3" class="node">
<title>shouldforward</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1144.05,-1439 817.15,-1439 817.15,-1259 1144.05,-1259 1144.05,-1439"/>
<text text-anchor="start" x="865.49" y="-1363.3" font-family="Arial" font-size="19.00" fill="#eff6ff">should_forward_message()</text>
<text text-anchor="start" x="837.2" y="-1340.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Main filtering logic &#45; combines keyword and</text>
<text text-anchor="start" x="923.91" y="-1322.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">exclusion checks</text>
</g>
<!-- extractjobinfo -->
<g id="node4" class="node">
<title>extractjobinfo</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1140.62,-1149 820.58,-1149 820.58,-969 1140.62,-969 1140.62,-1149"/>
<text text-anchor="start" x="907.2" y="-1073.3" font-family="Arial" font-size="19.00" fill="#eff6ff">extract_job_info()</text>
<text text-anchor="start" x="853.47" y="-1050.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Extract structured job information from</text>
<text text-anchor="start" x="935.99" y="-1032.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">message text</text>
</g>
<!-- containskeywords -->
<g id="node5" class="node">
<title>containskeywords</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1814.1,-1729 1468.01,-1729 1468.01,-1549 1814.1,-1549 1814.1,-1729"/>
<text text-anchor="start" x="1553.93" y="-1653.3" font-family="Arial" font-size="19.00" fill="#eff6ff">contains_keywords()</text>
<text text-anchor="start" x="1488.06" y="-1630.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Check if message contains required keywords</text>
<text text-anchor="start" x="1560.17" y="-1612.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">(python, developer, etc.)</text>
</g>
<!-- containsexclusions -->
<g id="node6" class="node">
<title>containsexclusions</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1806.17,-1439 1475.93,-1439 1475.93,-1259 1806.17,-1259 1806.17,-1439"/>
<text text-anchor="start" x="1523.83" y="-1363.3" font-family="Arial" font-size="19.00" fill="#eff6ff">contains_exclusion_words()</text>
<text text-anchor="start" x="1495.98" y="-1340.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Check if message contains exclusion words</text>
<text text-anchor="start" x="1581.03" y="-1322.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">(senior, lead, etc.)</text>
</g>
<!-- validatemessage -->
<g id="node7" class="node">
<title>validatemessage</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1809.11,-1149 1472.99,-1149 1472.99,-969 1809.11,-969 1809.11,-1149"/>
<text text-anchor="start" x="1525.94" y="-1064.3" font-family="Arial" font-size="19.00" fill="#eff6ff">validate_message_format()</text>
<text text-anchor="start" x="1493.05" y="-1041.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Validate message format and content quality</text>
</g>
<!-- isforwarded -->
<g id="node8" class="node">
<title>isforwarded</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1147.38,-518 813.81,-518 813.81,-338 1147.38,-338 1147.38,-518"/>
<text text-anchor="start" x="876.05" y="-442.3" font-family="Arial" font-size="19.00" fill="#eff6ff">is_message_forwarded()</text>
<text text-anchor="start" x="833.87" y="-419.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Check if message ID was already forwarded</text>
<text text-anchor="start" x="914.73" y="-401.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">(prevent duplicates)</text>
</g>
<!-- addforwarded -->
<g id="node9" class="node">
<title>addforwarded</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1166.14,-228 795.06,-228 795.06,-48 1166.14,-48 1166.14,-228"/>
<text text-anchor="start" x="867.06" y="-143.3" font-family="Arial" font-size="19.00" fill="#eff6ff">add_forwarded_message()</text>
<text text-anchor="start" x="815.12" y="-120.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Record newly forwarded message with timestamp</text>
</g>
<!-- cleanupold -->
<g id="node10" class="node">
<title>cleanupold</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1162.82,-808 798.37,-808 798.37,-628 1162.82,-628 1162.82,-808"/>
<text text-anchor="start" x="889.24" y="-732.3" font-family="Arial" font-size="19.00" fill="#eff6ff">cleanup_old_entries()</text>
<text text-anchor="start" x="818.43" y="-709.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Remove forwarded message entries older than 7</text>
<text text-anchor="start" x="964.76" y="-691.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">days</text>
</g>
<!-- botuser -->
<g id="node11" class="node">
<title>botuser</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="402.22,-2055 77.82,-2055 77.82,-1875 402.22,-1875 402.22,-2055"/>
<text text-anchor="start" x="203.06" y="-1979.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Bot User</text>
<text text-anchor="start" x="97.88" y="-1956.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Users interacting with the bot via Telegram</text>
<text text-anchor="start" x="203.34" y="-1938.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">commands</text>
</g>
<!-- sourcechannels -->
<g id="node12" class="node">
<title>sourcechannels</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1140.62,-2055 820.58,-2055 820.58,-1875 1140.62,-1875 1140.62,-2055"/>
<text text-anchor="start" x="907.72" y="-1989.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Source Channels</text>
<text text-anchor="start" x="923.88" y="-1967.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">Telegram Channels</text>
<text text-anchor="start" x="852.2" y="-1946.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Monitored job posting channels (cyithr,</text>
<text text-anchor="start" x="871.38" y="-1928.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">cyprusithr, relocation_vacancies)</text>
</g>
<!-- targetchat -->
<g id="node13" class="node">
<title>targetchat</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1807.02,-2055 1475.08,-2055 1475.08,-1875 1807.02,-1875 1807.02,-2055"/>
<text text-anchor="start" x="1590.89" y="-1989.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Target Chat</text>
<text text-anchor="start" x="1598.06" y="-1967.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">Telegram Chat</text>
<text text-anchor="start" x="1495.14" y="-1946.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Destination chat where filtered job posts are</text>
<text text-anchor="start" x="1607.7" y="-1928.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">forwarded</text>
</g>
<!-- processmessage&#45;&gt;forwardmessage -->
<g id="edge3" class="edge">
<title>processmessage&#45;&gt;forwardmessage</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M240.02,-628.02C240.02,-589.6 240.02,-544.61 240.02,-505.13"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="242.65,-505.22 240.02,-497.72 237.4,-505.22 242.65,-505.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="128.47,-550.1 128.47,-572.9 322.77,-572.9 322.77,-550.1 128.47,-550.1"/>
<text text-anchor="start" x="131.47" y="-557.3" font-family="Arial" font-size="14.00" fill="#c6c6c6">Forwards approved messages</text>
</g>
<!-- processmessage&#45;&gt;shouldforward -->
<g id="edge4" class="edge">
<title>processmessage&#45;&gt;shouldforward</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M313.65,-807.73C359.31,-862.21 420.63,-931.99 480.04,-989 589.51,-1094.03 621.47,-1116.15 745.15,-1204 768.62,-1220.67 794,-1237.52 819.11,-1253.53"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="817.68,-1255.73 825.42,-1257.54 820.49,-1251.3 817.68,-1255.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="480.04,-1193.76 480.04,-1216.56 735.06,-1216.56 735.06,-1193.76 480.04,-1193.76"/>
<text text-anchor="start" x="483.04" y="-1200.96" font-family="Arial" font-size="14.00" fill="#c6c6c6">Checks if message should be forwarded</text>
</g>
<!-- processmessage&#45;&gt;extractjobinfo -->
<g id="edge5" class="edge">
<title>processmessage&#45;&gt;extractjobinfo</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M399.92,-791.36C521.21,-847.36 687.94,-924.34 811.47,-981.37"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="810,-983.59 817.91,-984.35 812.2,-978.82 810,-983.59"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="531.41,-938.97 531.41,-961.77 683.69,-961.77 683.69,-938.97 531.41,-938.97"/>
<text text-anchor="start" x="534.41" y="-946.17" font-family="Arial" font-size="14.00" fill="#c6c6c6">Extracts job information</text>
</g>
<!-- processmessage&#45;&gt;isforwarded -->
<g id="edge6" class="edge">
<title>processmessage&#45;&gt;isforwarded</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M399.92,-655.61C518.92,-608.88 681.66,-544.98 804.42,-496.78"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="805.09,-499.34 811.12,-494.15 803.18,-494.45 805.09,-499.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="517.79,-615.92 517.79,-638.72 697.31,-638.72 697.31,-615.92 517.79,-615.92"/>
<text text-anchor="start" x="520.79" y="-623.12" font-family="Arial" font-size="14.00" fill="#c6c6c6">Checks if already forwarded</text>
</g>
<!-- processmessage&#45;&gt;cleanupold -->
<g id="edge7" class="edge">
<title>processmessage&#45;&gt;cleanupold</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M399.92,-718C513.72,-718 667.53,-718 788.11,-718"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="788.04,-720.63 795.54,-718 788.04,-715.38 788.04,-720.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="538.79,-718 538.79,-740.8 676.31,-740.8 676.31,-718 538.79,-718"/>
<text text-anchor="start" x="541.79" y="-725.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Cleans up old entries</text>
</g>
<!-- forwardmessage&#45;&gt;addforwarded -->
<g id="edge8" class="edge">
<title>forwardmessage&#45;&gt;addforwarded</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M399.92,-347.56C512.92,-306.71 665.36,-251.6 785.55,-208.15"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="786.24,-210.69 792.4,-205.67 784.46,-205.75 786.24,-210.69"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="515.06,-311.02 515.06,-333.82 700.04,-333.82 700.04,-311.02 515.06,-311.02"/>
<text text-anchor="start" x="518.06" y="-318.22" font-family="Arial" font-size="14.00" fill="#c6c6c6">Records forwarded message</text>
</g>
<!-- shouldforward&#45;&gt;containskeywords -->
<g id="edge9" class="edge">
<title>shouldforward&#45;&gt;containskeywords</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1143.94,-1420.5C1239.3,-1462.5 1360.06,-1515.69 1458.56,-1559.07"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1457.33,-1561.39 1465.25,-1562.01 1459.45,-1556.59 1457.33,-1561.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1226.14,-1528.5 1226.14,-1551.3 1408.01,-1551.3 1408.01,-1528.5 1226.14,-1528.5"/>
<text text-anchor="start" x="1229.14" y="-1535.7" font-family="Arial" font-size="14.00" fill="#c6c6c6">Validates required keywords</text>
</g>
<!-- shouldforward&#45;&gt;containsexclusions -->
<g id="edge10" class="edge">
<title>shouldforward&#45;&gt;containsexclusions</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1143.94,-1349C1241.59,-1349 1365.87,-1349 1465.61,-1349"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1465.57,-1351.63 1473.07,-1349 1465.57,-1346.38 1465.57,-1351.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1238.99,-1349 1238.99,-1371.8 1395.16,-1371.8 1395.16,-1349 1238.99,-1349"/>
<text text-anchor="start" x="1241.99" y="-1356.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Checks exclusion words</text>
</g>
<!-- extractjobinfo&#45;&gt;validatemessage -->
<g id="edge11" class="edge">
<title>extractjobinfo&#45;&gt;validatemessage</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1140.57,-1059C1237.8,-1059 1362.36,-1059 1462.76,-1059"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1462.49,-1061.63 1469.99,-1059 1462.49,-1056.38 1462.49,-1061.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1238.97,-1059 1238.97,-1081.8 1395.18,-1081.8 1395.18,-1059 1238.97,-1059"/>
<text text-anchor="start" x="1241.97" y="-1066.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Validates extracted data</text>
</g>
<!-- botuser&#45;&gt;sourcechannels -->
<!-- sourcechannels&#45;&gt;targetchat -->
</g>
</svg>
`;case"index":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1258pt" height="856pt"
 viewBox="0.00 0.00 1257.69 855.70" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 840.65)">
<!-- botuser -->
<g id="node1" class="node">
<title>botuser</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="787.83,-825.6 463.43,-825.6 463.43,-645.6 787.83,-645.6 787.83,-825.6"/>
<text text-anchor="start" x="588.67" y="-749.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Bot User</text>
<text text-anchor="start" x="483.48" y="-726.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Users interacting with the bot via Telegram</text>
<text text-anchor="start" x="588.95" y="-708.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">commands</text>
</g>
<!-- jobmonitoringbot -->
<g id="node2" class="node">
<title>jobmonitoringbot</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="794.1,-502.8 457.16,-502.8 457.16,-322.8 794.1,-322.8 794.1,-502.8"/>
<text text-anchor="start" x="546.42" y="-436.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Job Monitoring Bot</text>
<text text-anchor="start" x="514.7" y="-415.5" font-family="Arial" font-size="13.00" fill="#bfdbfe">Python, Telethon, python&#45;telegram&#45;bot</text>
<text text-anchor="start" x="477.21" y="-394.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Telegram bot that monitors job channels and</text>
<text text-anchor="start" x="548.1" y="-376.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">forwards relevant posts</text>
</g>
<!-- telegramplatform -->
<g id="node3" class="node">
<title>telegramplatform</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="355.26,-180 0,-180 0,0 355.26,0 355.26,-180"/>
<text text-anchor="start" x="99.5" y="-105.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Telegram Platform</text>
<text text-anchor="start" x="137.89" y="-83.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">Telegram API</text>
<text text-anchor="start" x="20.06" y="-62.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">External Telegram messaging platform and API</text>
</g>
<!-- sourcechannels -->
<g id="node4" class="node">
<title>sourcechannels</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="785.65,-180 465.61,-180 465.61,0 785.65,0 785.65,-180"/>
<text text-anchor="start" x="552.75" y="-114.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Source Channels</text>
<text text-anchor="start" x="568.91" y="-92.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">Telegram Channels</text>
<text text-anchor="start" x="497.23" y="-71.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Monitored job posting channels (cyithr,</text>
<text text-anchor="start" x="516.41" y="-53.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">cyprusithr, relocation_vacancies)</text>
</g>
<!-- targetchat -->
<g id="node5" class="node">
<title>targetchat</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1227.6,-180 895.66,-180 895.66,0 1227.6,0 1227.6,-180"/>
<text text-anchor="start" x="1011.47" y="-114.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Target Chat</text>
<text text-anchor="start" x="1018.64" y="-92.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">Telegram Chat</text>
<text text-anchor="start" x="915.72" y="-71.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Destination chat where filtered job posts are</text>
<text text-anchor="start" x="1028.28" y="-53.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">forwarded</text>
</g>
<!-- botuser&#45;&gt;jobmonitoringbot -->
<g id="edge1" class="edge">
<title>botuser&#45;&gt;jobmonitoringbot</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M625.63,-645.67C625.63,-604.47 625.63,-555.36 625.63,-512.97"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="628.25,-513.16 625.63,-505.66 623,-513.16 628.25,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="625.63,-562.8 625.63,-585.6 759.24,-585.6 759.24,-562.8 625.63,-562.8"/>
<text text-anchor="start" x="628.63" y="-570" font-family="Arial" font-size="14.00" fill="#c6c6c6">Uses bot commands</text>
</g>
<!-- jobmonitoringbot&#45;&gt;telegramplatform -->
<g id="edge2" class="edge">
<title>jobmonitoringbot&#45;&gt;telegramplatform</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M501.43,-322.87C441.95,-280.27 370.67,-229.23 310.15,-185.89"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="311.77,-183.82 304.14,-181.59 308.71,-188.09 311.77,-183.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="415.06,-240 415.06,-262.8 528.45,-262.8 528.45,-240 415.06,-240"/>
<text text-anchor="start" x="418.06" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Connects via API</text>
</g>
<!-- jobmonitoringbot&#45;&gt;sourcechannels -->
<g id="edge3" class="edge">
<title>jobmonitoringbot&#45;&gt;sourcechannels</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M625.63,-322.87C625.63,-281.67 625.63,-232.56 625.63,-190.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="628.25,-190.36 625.63,-182.86 623,-190.36 628.25,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="625.63,-240 625.63,-262.8 802.81,-262.8 802.81,-240 625.63,-240"/>
<text text-anchor="start" x="628.63" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Monitors for new messages</text>
</g>
<!-- jobmonitoringbot&#45;&gt;targetchat -->
<g id="edge4" class="edge">
<title>jobmonitoringbot&#45;&gt;targetchat</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M747.62,-322.9C774.65,-303.15 803.13,-282.29 829.63,-262.8 863.46,-237.92 899.99,-210.93 933.84,-185.86"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="935.03,-188.25 939.49,-181.68 931.9,-184.03 935.03,-188.25"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="854.84,-240 854.84,-262.8 1032.79,-262.8 1032.79,-240 854.84,-240"/>
<text text-anchor="start" x="857.84" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Forwards filtered messages</text>
</g>
</g>
</svg>
`;case"jobMonitoringBot":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1372pt" height="973pt"
 viewBox="0.00 0.00 1372.10 972.90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 957.85)">
<g id="clust1" class="cluster">
<title>cluster_jobmonitoringbot</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-934.8 1334,-934.8 1334,-8 8,-8"/>
<text text-anchor="start" x="16" y="-921.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">JOB MONITORING BOT</text>
</g>
<!-- applicationlayer -->
<g id="node1" class="node">
<title>applicationlayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="417.02,-873.6 96.98,-873.6 96.98,-693.6 417.02,-693.6 417.02,-873.6"/>
<text text-anchor="start" x="184.12" y="-788.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Application Layer</text>
<text text-anchor="start" x="143.6" y="-765.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Entry point and orchestration logic</text>
</g>
<!-- handlerslayer -->
<g id="node2" class="node">
<title>handlerslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="864.02,-873.6 543.98,-873.6 543.98,-693.6 864.02,-693.6 864.02,-873.6"/>
<text text-anchor="start" x="639.58" y="-788.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Handlers Layer</text>
<text text-anchor="start" x="633.14" y="-765.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">User interaction layer</text>
</g>
<!-- serviceslayer -->
<g id="node3" class="node">
<title>serviceslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-550.8 47.98,-550.8 47.98,-370.8 368.02,-370.8 368.02,-550.8"/>
<text text-anchor="start" x="145.17" y="-466.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Services Layer</text>
<text text-anchor="start" x="112.96" y="-442.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Core business logic services</text>
</g>
<!-- configurationlayer -->
<g id="node4" class="node">
<title>configurationlayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="125.09" y="-143.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Configuration Layer</text>
<text text-anchor="start" x="77.09" y="-120.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Settings and environment management</text>
</g>
<!-- utilitieslayer -->
<g id="node5" class="node">
<title>utilitieslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-228 477.98,-228 477.98,-48 798.02,-48 798.02,-228"/>
<text text-anchor="start" x="580.98" y="-143.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Utilities Layer</text>
<text text-anchor="start" x="513.36" y="-120.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Helper functions and common utilities</text>
</g>
<!-- datalayer -->
<g id="node6" class="node">
<title>datalayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1294.02,-873.6 973.98,-873.6 973.98,-693.6 1294.02,-693.6 1294.02,-873.6"/>
<text text-anchor="start" x="1051.62" y="-788.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Data Storage Layer</text>
<text text-anchor="start" x="1040.21" y="-765.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">File&#45;based persistence layer</text>
</g>
<!-- applicationlayer&#45;&gt;serviceslayer -->
<g id="edge1" class="edge">
<title>applicationlayer&#45;&gt;serviceslayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M243.42,-693.67C237.12,-652.47 229.62,-603.36 223.15,-560.97"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="225.75,-560.64 222.03,-553.62 220.56,-561.43 225.75,-560.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="233.97,-610.8 233.97,-633.6 260.96,-633.6 260.96,-610.8 233.97,-610.8"/>
<text text-anchor="start" x="236.97" y="-619" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- applicationlayer&#45;&gt;utilitieslayer -->
<g id="edge2" class="edge">
<title>applicationlayer&#45;&gt;utilitieslayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M325.06,-693.78C356.34,-651.44 393.05,-599.5 423,-550.8 486.93,-446.84 550.41,-321.89 591.62,-237.1"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="593.93,-238.35 594.84,-230.46 589.21,-236.06 593.93,-238.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="523.61,-449.4 523.61,-472.2 717.18,-472.2 717.18,-449.4 523.61,-449.4"/>
<text text-anchor="start" x="526.61" y="-456.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Configures application logging</text>
</g>
<!-- handlerslayer&#45;&gt;serviceslayer -->
<g id="edge3" class="edge">
<title>handlerslayer&#45;&gt;serviceslayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M566.5,-693.67C500.37,-650.9 421.08,-599.61 353.89,-556.16"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="355.61,-554.14 347.88,-552.27 352.76,-558.55 355.61,-554.14"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="470.87,-610.8 470.87,-633.6 497.87,-633.6 497.87,-610.8 470.87,-610.8"/>
<text text-anchor="start" x="473.87" y="-619" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- handlerslayer&#45;&gt;utilitieslayer -->
<g id="edge4" class="edge">
<title>handlerslayer&#45;&gt;utilitieslayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M755.81,-693.64C797.96,-609.55 845.02,-480.31 809,-370.8 792.92,-321.9 762.12,-274.86 731.05,-236.07"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="733.1,-234.43 726.33,-230.27 729.03,-237.75 733.1,-234.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="821.81,-449.4 821.81,-472.2 963.97,-472.2 963.97,-449.4 821.81,-449.4"/>
<text text-anchor="start" x="824.81" y="-456.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Logs command errors</text>
</g>
<!-- serviceslayer&#45;&gt;configurationlayer -->
<g id="edge5" class="edge">
<title>serviceslayer&#45;&gt;configurationlayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M208,-370.87C208,-329.67 208,-280.56 208,-238.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="210.63,-238.36 208,-230.86 205.38,-238.36 210.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-288 208,-310.8 234.99,-310.8 234.99,-288 208,-288"/>
<text text-anchor="start" x="211" y="-296.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- serviceslayer&#45;&gt;utilitieslayer -->
<g id="edge6" class="edge">
<title>serviceslayer&#45;&gt;utilitieslayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M327.21,-370.87C384.3,-328.27 452.72,-277.23 510.81,-233.89"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="512.07,-236.23 516.51,-229.64 508.93,-232.02 512.07,-236.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="435.89,-288 435.89,-310.8 462.89,-310.8 462.89,-288 435.89,-288"/>
<text text-anchor="start" x="438.89" y="-296.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
</g>
</svg>
`;case"applicationLayer":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="903pt" height="602pt"
 viewBox="0.00 0.00 903.10 602.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 587.05)">
<g id="clust1" class="cluster">
<title>cluster_applicationlayer</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-282.8 8,-564 865,-564 865,-282.8 8,-282.8"/>
<text text-anchor="start" x="16" y="-551.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">APPLICATION LAYER</text>
</g>
<!-- mainapp -->
<g id="node1" class="node">
<title>mainapp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-502.8 47.98,-502.8 47.98,-322.8 368.02,-322.8 368.02,-502.8"/>
<text text-anchor="start" x="138.29" y="-427.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Main Application</text>
<text text-anchor="start" x="162.11" y="-406.5" font-family="Arial" font-size="13.00" fill="#bfdbfe">Python, asyncio</text>
<text text-anchor="start" x="115.45" y="-385.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Entry point and orchestrator</text>
</g>
<!-- botcore -->
<g id="node2" class="node">
<title>botcore</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="825.02,-502.8 504.98,-502.8 504.98,-322.8 825.02,-322.8 825.02,-502.8"/>
<text text-anchor="start" x="627.51" y="-427.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Bot Core</text>
<text text-anchor="start" x="573.95" y="-406.5" font-family="Arial" font-size="13.00" fill="#bfdbfe">Python, JobMonitoringBot class</text>
<text text-anchor="start" x="575.78" y="-385.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Main bot coordination logic</text>
</g>
<!-- utilitieslayer -->
<g id="node3" class="node">
<title>utilitieslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-180 47.98,-180 47.98,0 368.02,0 368.02,-180"/>
<text text-anchor="start" x="150.98" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Utilities Layer</text>
<text text-anchor="start" x="83.36" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Helper functions and common utilities</text>
</g>
<!-- serviceslayer -->
<g id="node4" class="node">
<title>serviceslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="825.02,-180 504.98,-180 504.98,0 825.02,0 825.02,-180"/>
<text text-anchor="start" x="602.17" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Services Layer</text>
<text text-anchor="start" x="569.96" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Core business logic services</text>
</g>
<!-- mainapp&#45;&gt;botcore -->
<g id="edge1" class="edge">
<title>mainapp&#45;&gt;botcore</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M367.84,-412.8C408.89,-412.8 453.2,-412.8 494.75,-412.8"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="494.73,-415.43 502.23,-412.8 494.73,-410.18 494.73,-415.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="423,-415.8 423,-438.6 450,-438.6 450,-415.8 423,-415.8"/>
<text text-anchor="start" x="426" y="-424" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- mainapp&#45;&gt;utilitieslayer -->
<g id="edge2" class="edge">
<title>mainapp&#45;&gt;utilitieslayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M208,-322.87C208,-281.67 208,-232.56 208,-190.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="210.63,-190.36 208,-182.86 205.38,-190.36 210.63,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-240 208,-262.8 401.57,-262.8 401.57,-240 208,-240"/>
<text text-anchor="start" x="211" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Configures application logging</text>
</g>
<!-- botcore&#45;&gt;serviceslayer -->
<g id="edge3" class="edge">
<title>botcore&#45;&gt;serviceslayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M665,-322.87C665,-281.67 665,-232.56 665,-190.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="667.63,-190.36 665,-182.86 662.38,-190.36 667.63,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="665,-240 665,-262.8 691.99,-262.8 691.99,-240 665,-240"/>
<text text-anchor="start" x="668" y="-248.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
</g>
</svg>
`;case"configurationLayer":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="430pt" height="574pt"
 viewBox="0.00 0.00 430.10 574.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 559.05)">
<g id="clust1" class="cluster">
<title>cluster_configurationlayer</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 392,-273.2 392,-8 8,-8"/>
<text text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CONFIGURATION LAYER</text>
</g>
<!-- configuration -->
<g id="node1" class="node">
<title>configuration</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="360.02,-220 39.98,-220 39.98,-40 360.02,-40 360.02,-220"/>
<text text-anchor="start" x="143.49" y="-145.1" font-family="Arial" font-size="19.00" fill="#f8fafc">Configuration</text>
<text text-anchor="start" x="153.39" y="-123.7" font-family="Arial" font-size="13.00" fill="#cbd5e1">Settings module</text>
<text text-anchor="start" x="69.09" y="-102.3" font-family="Arial" font-size="15.00" fill="#cbd5e1">Settings and environment management</text>
</g>
<!-- serviceslayer -->
<g id="node2" class="node">
<title>serviceslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-544 39.98,-544 39.98,-364 360.02,-364 360.02,-544"/>
<text text-anchor="start" x="137.17" y="-459.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Services Layer</text>
<text text-anchor="start" x="104.96" y="-436.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Core business logic services</text>
</g>
<!-- serviceslayer&#45;&gt;configuration -->
<g id="edge1" class="edge">
<title>serviceslayer&#45;&gt;configuration</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M200,-364.16C200,-322.63 200,-273.02 200,-230.26"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="202.63,-230.36 200,-222.86 197.38,-230.36 202.63,-230.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="200,-281.2 200,-304 226.99,-304 226.99,-281.2 200,-281.2"/>
<text text-anchor="start" x="203" y="-289.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
</g>
</svg>
`;case"dataLayer":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="430pt" height="311pt"
 viewBox="0.00 0.00 430.10 311.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_datalayer</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 392,-273.2 392,-8 8,-8"/>
<text text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">DATA STORAGE LAYER</text>
</g>
<!-- datastorage -->
<g id="node1" class="node">
<title>datastorage</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="360.02,-220 39.98,-220 39.98,-40 360.02,-40 360.02,-220"/>
<text text-anchor="start" x="144.02" y="-145.1" font-family="Arial" font-size="19.00" fill="#f0f9ff">Data Storage</text>
<text text-anchor="start" x="169.3" y="-123.7" font-family="Arial" font-size="13.00" fill="#b6ecf7">JSON files</text>
<text text-anchor="start" x="106.21" y="-102.3" font-family="Arial" font-size="15.00" fill="#b6ecf7">File&#45;based persistence layer</text>
</g>
</g>
</svg>
`;case"handlersLayer":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="780pt" height="594pt"
 viewBox="0.00 0.00 780.14 594.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 579.05)">
<g id="clust1" class="cluster">
<title>cluster_handlerslayer</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="183.02,-290.8 183.02,-556 567.02,-556 567.02,-290.8 183.02,-290.8"/>
<text text-anchor="start" x="191.02" y="-543.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">HANDLERS LAYER</text>
</g>
<!-- handlers -->
<g id="node1" class="node">
<title>handlers</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="535.04,-502.8 215,-502.8 215,-322.8 535.04,-322.8 535.04,-502.8"/>
<text text-anchor="start" x="290.54" y="-427.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Command Handlers</text>
<text text-anchor="start" x="290.11" y="-406.5" font-family="Arial" font-size="13.00" fill="#bfdbfe">python&#45;telegram&#45;bot handlers</text>
<text text-anchor="start" x="304.16" y="-385.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">User interaction layer</text>
</g>
<!-- serviceslayer -->
<g id="node2" class="node">
<title>serviceslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text text-anchor="start" x="97.19" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Services Layer</text>
<text text-anchor="start" x="64.98" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Core business logic services</text>
</g>
<!-- utilitieslayer -->
<g id="node3" class="node">
<title>utilitieslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-180 430,-180 430,0 750.04,0 750.04,-180"/>
<text text-anchor="start" x="533" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Utilities Layer</text>
<text text-anchor="start" x="465.38" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Helper functions and common utilities</text>
</g>
<!-- handlers&#45;&gt;serviceslayer -->
<g id="edge1" class="edge">
<title>handlers&#45;&gt;serviceslayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M315.42,-322.87C287.45,-281.14 254.06,-231.31 225.4,-188.56"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="227.59,-187.11 221.24,-182.34 223.23,-190.04 227.59,-187.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="273.97,-240 273.97,-262.8 300.96,-262.8 300.96,-240 273.97,-240"/>
<text text-anchor="start" x="276.97" y="-248.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- handlers&#45;&gt;utilitieslayer -->
<g id="edge2" class="edge">
<title>handlers&#45;&gt;utilitieslayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M434.62,-322.87C462.59,-281.14 495.98,-231.31 524.64,-188.56"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="526.81,-190.04 528.8,-182.34 522.45,-187.11 526.81,-190.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="488.97,-240 488.97,-262.8 631.13,-262.8 631.13,-240 488.97,-240"/>
<text text-anchor="start" x="491.97" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Logs command errors</text>
</g>
</g>
</svg>
`;case"servicesLayer":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="780pt" height="857pt"
 viewBox="0.00 0.00 780.14 856.90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 841.85)">
<g id="clust1" class="cluster">
<title>cluster_serviceslayer</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="183.02,-290.8 183.02,-556 567.02,-556 567.02,-290.8 183.02,-290.8"/>
<text text-anchor="start" x="191.02" y="-543.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SERVICES LAYER</text>
</g>
<!-- services -->
<g id="node1" class="node">
<title>services</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="535.04,-502.8 215,-502.8 215,-322.8 535.04,-322.8 535.04,-502.8"/>
<text text-anchor="start" x="338.59" y="-427.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Services</text>
<text text-anchor="start" x="329.14" y="-406.5" font-family="Arial" font-size="13.00" fill="#bfdbfe">Python services</text>
<text text-anchor="start" x="274.15" y="-385.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Business logic service classes</text>
</g>
<!-- applicationlayer -->
<g id="node2" class="node">
<title>applicationlayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-826.8 0,-826.8 0,-646.8 320.04,-646.8 320.04,-826.8"/>
<text text-anchor="start" x="87.14" y="-742.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Application Layer</text>
<text text-anchor="start" x="46.62" y="-718.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Entry point and orchestration logic</text>
</g>
<!-- handlerslayer -->
<g id="node3" class="node">
<title>handlerslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-826.8 430,-826.8 430,-646.8 750.04,-646.8 750.04,-826.8"/>
<text text-anchor="start" x="525.6" y="-742.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Handlers Layer</text>
<text text-anchor="start" x="519.16" y="-718.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">User interaction layer</text>
</g>
<!-- configurationlayer -->
<g id="node4" class="node">
<title>configurationlayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text text-anchor="start" x="77.11" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Configuration Layer</text>
<text text-anchor="start" x="29.11" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Settings and environment management</text>
</g>
<!-- utilitieslayer -->
<g id="node5" class="node">
<title>utilitieslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-180 430,-180 430,0 750.04,0 750.04,-180"/>
<text text-anchor="start" x="533" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Utilities Layer</text>
<text text-anchor="start" x="465.38" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Helper functions and common utilities</text>
</g>
<!-- services&#45;&gt;configurationlayer -->
<g id="edge3" class="edge">
<title>services&#45;&gt;configurationlayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M315.42,-322.87C287.45,-281.14 254.06,-231.31 225.4,-188.56"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="227.59,-187.11 221.24,-182.34 223.23,-190.04 227.59,-187.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="273.97,-240 273.97,-262.8 300.96,-262.8 300.96,-240 273.97,-240"/>
<text text-anchor="start" x="276.97" y="-248.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- services&#45;&gt;utilitieslayer -->
<g id="edge4" class="edge">
<title>services&#45;&gt;utilitieslayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M434.62,-322.87C462.59,-281.14 495.98,-231.31 524.64,-188.56"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="526.81,-190.04 528.8,-182.34 522.45,-187.11 526.81,-190.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="488.97,-240 488.97,-262.8 515.96,-262.8 515.96,-240 488.97,-240"/>
<text text-anchor="start" x="491.97" y="-248.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- applicationlayer&#45;&gt;services -->
<g id="edge1" class="edge">
<title>applicationlayer&#45;&gt;services</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M219.34,-646.96C247.48,-604.81 281.17,-554.35 310.01,-511.16"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="312.05,-512.84 314.03,-505.15 307.68,-509.93 312.05,-512.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="273.97,-564 273.97,-586.8 300.96,-586.8 300.96,-564 273.97,-564"/>
<text text-anchor="start" x="276.97" y="-572.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- handlerslayer&#45;&gt;services -->
<g id="edge2" class="edge">
<title>handlerslayer&#45;&gt;services</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M530.7,-646.96C502.56,-604.81 468.87,-554.35 440.03,-511.16"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="442.36,-509.93 436.01,-505.15 437.99,-512.84 442.36,-509.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="488.97,-564 488.97,-586.8 515.96,-586.8 515.96,-564 488.97,-564"/>
<text text-anchor="start" x="491.97" y="-572.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
</g>
</svg>
`;case"utilitiesLayer":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1210pt" height="574pt"
 viewBox="0.00 0.00 1210.14 574.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 559.05)">
<g id="clust1" class="cluster">
<title>cluster_utilitieslayer</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="398.02,-8 398.02,-273.2 782.02,-273.2 782.02,-8 398.02,-8"/>
<text text-anchor="start" x="406.02" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UTILITIES LAYER</text>
</g>
<!-- utilities -->
<g id="node1" class="node">
<title>utilities</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="750.04,-220 430,-220 430,-40 750.04,-40 750.04,-220"/>
<text text-anchor="start" x="559.4" y="-145.1" font-family="Arial" font-size="19.00" fill="#f0f9ff">Utilities</text>
<text text-anchor="start" x="526.79" y="-123.7" font-family="Arial" font-size="13.00" fill="#b6ecf7">Python utility modules</text>
<text text-anchor="start" x="465.38" y="-102.3" font-family="Arial" font-size="15.00" fill="#b6ecf7">Helper functions and common utilities</text>
</g>
<!-- applicationlayer -->
<g id="node2" class="node">
<title>applicationlayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-544 0,-544 0,-364 320.04,-364 320.04,-544"/>
<text text-anchor="start" x="87.14" y="-459.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Application Layer</text>
<text text-anchor="start" x="46.62" y="-436.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Entry point and orchestration logic</text>
</g>
<!-- serviceslayer -->
<g id="node3" class="node">
<title>serviceslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-544 430,-544 430,-364 750.04,-364 750.04,-544"/>
<text text-anchor="start" x="527.19" y="-459.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Services Layer</text>
<text text-anchor="start" x="494.98" y="-436.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Core business logic services</text>
</g>
<!-- handlerslayer -->
<g id="node4" class="node">
<title>handlerslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1180.04,-544 860,-544 860,-364 1180.04,-364 1180.04,-544"/>
<text text-anchor="start" x="955.6" y="-459.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Handlers Layer</text>
<text text-anchor="start" x="949.16" y="-436.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">User interaction layer</text>
</g>
<!-- applicationlayer&#45;&gt;utilities -->
<g id="edge1" class="edge">
<title>applicationlayer&#45;&gt;utilities</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M264.56,-364.17C297.62,-336.92 334.62,-307.26 369.45,-281.2 394.13,-262.73 420.89,-243.71 446.97,-225.68"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="448.24,-228 452.92,-221.58 445.26,-223.67 448.24,-228"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="369.45,-281.2 369.45,-304 563.02,-304 563.02,-281.2 369.45,-281.2"/>
<text text-anchor="start" x="372.45" y="-288.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Configures application logging</text>
</g>
<!-- serviceslayer&#45;&gt;utilities -->
<g id="edge2" class="edge">
<title>serviceslayer&#45;&gt;utilities</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M590.02,-364.16C590.02,-322.63 590.02,-273.02 590.02,-230.26"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="592.65,-230.36 590.02,-222.86 587.4,-230.36 592.65,-230.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="590.02,-281.2 590.02,-304 617.01,-304 617.01,-281.2 590.02,-281.2"/>
<text text-anchor="start" x="593.02" y="-289.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- handlerslayer&#45;&gt;utilities -->
<g id="edge3" class="edge">
<title>handlerslayer&#45;&gt;utilities</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M901.38,-364.16C844.04,-321.22 775.18,-269.65 716.81,-225.94"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="718.64,-224.04 711.07,-221.64 715.5,-228.24 718.64,-224.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="817.91,-281.2 817.91,-304 960.08,-304 960.08,-281.2 817.91,-281.2"/>
<text text-anchor="start" x="820.91" y="-288.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Logs command errors</text>
</g>
</g>
</svg>
`;case"botCore":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="430pt" height="857pt"
 viewBox="0.00 0.00 430.10 856.90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 841.85)">
<g id="clust1" class="cluster">
<title>cluster_botcore</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-290.8 8,-556 392,-556 392,-290.8 8,-290.8"/>
<text text-anchor="start" x="16" y="-543.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BOT CORE</text>
</g>
<!-- botmodule -->
<g id="node1" class="node">
<title>botmodule</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-502.8 39.98,-502.8 39.98,-322.8 360.02,-322.8 360.02,-502.8"/>
<text text-anchor="start" x="174.12" y="-418.1" font-family="Arial" font-size="19.00" fill="#eff6ff">bot.py</text>
<text text-anchor="start" x="118.29" y="-394.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Core bot implementation</text>
</g>
<!-- mainapp -->
<g id="node2" class="node">
<title>mainapp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-826.8 39.98,-826.8 39.98,-646.8 360.02,-646.8 360.02,-826.8"/>
<text text-anchor="start" x="130.29" y="-751.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Main Application</text>
<text text-anchor="start" x="154.11" y="-730.5" font-family="Arial" font-size="13.00" fill="#bfdbfe">Python, asyncio</text>
<text text-anchor="start" x="107.45" y="-709.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Entry point and orchestrator</text>
</g>
<!-- serviceslayer -->
<g id="node3" class="node">
<title>serviceslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-180 39.98,-180 39.98,0 360.02,0 360.02,-180"/>
<text text-anchor="start" x="137.17" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Services Layer</text>
<text text-anchor="start" x="104.96" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Core business logic services</text>
</g>
<!-- botmodule&#45;&gt;serviceslayer -->
<g id="edge2" class="edge">
<title>botmodule&#45;&gt;serviceslayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M200,-322.87C200,-281.67 200,-232.56 200,-190.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="202.63,-190.36 200,-182.86 197.38,-190.36 202.63,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="200,-240 200,-262.8 226.99,-262.8 226.99,-240 200,-240"/>
<text text-anchor="start" x="203" y="-248.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- mainapp&#45;&gt;botmodule -->
<g id="edge1" class="edge">
<title>mainapp&#45;&gt;botmodule</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M200,-646.96C200,-605.43 200,-555.82 200,-513.06"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="202.63,-513.16 200,-505.66 197.38,-513.16 202.63,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="200,-564 200,-586.8 226.99,-586.8 226.99,-564 200,-564"/>
<text text-anchor="start" x="203" y="-572.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
</g>
</svg>
`;case"configuration":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="430pt" height="574pt"
 viewBox="0.00 0.00 430.10 574.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 559.05)">
<g id="clust1" class="cluster">
<title>cluster_configuration</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 392,-273.2 392,-8 8,-8"/>
<text text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CONFIGURATION</text>
</g>
<!-- settingsmodule -->
<g id="node1" class="node">
<title>settingsmodule</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="360.02,-220 39.98,-220 39.98,-40 360.02,-40 360.02,-220"/>
<text text-anchor="start" x="131.88" y="-145.1" font-family="Arial" font-size="19.00" fill="#f8fafc">Settings Module</text>
<text text-anchor="start" x="150.5" y="-123.7" font-family="Arial" font-size="13.00" fill="#cbd5e1">Python dataclass</text>
<text text-anchor="start" x="109.53" y="-102.3" font-family="Arial" font-size="15.00" fill="#cbd5e1">Configuration management</text>
</g>
<!-- serviceslayer -->
<g id="node2" class="node">
<title>serviceslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-544 39.98,-544 39.98,-364 360.02,-364 360.02,-544"/>
<text text-anchor="start" x="137.17" y="-459.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Services Layer</text>
<text text-anchor="start" x="104.96" y="-436.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Core business logic services</text>
</g>
<!-- serviceslayer&#45;&gt;settingsmodule -->
<g id="edge1" class="edge">
<title>serviceslayer&#45;&gt;settingsmodule</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M200,-364.16C200,-322.63 200,-273.02 200,-230.26"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="202.63,-230.36 200,-222.86 197.38,-230.36 202.63,-230.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="200,-281.2 200,-304 226.99,-304 226.99,-281.2 200,-281.2"/>
<text text-anchor="start" x="203" y="-289.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
</g>
</svg>
`;case"dataStorage":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="882pt" height="627pt"
 viewBox="0.00 0.00 882.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_datastorage</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 844,-589.2 844,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">DATA STORAGE</text>
</g>
<!-- forwardedmessages -->
<g id="node1" class="node">
<title>forwardedmessages</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="91.31" y="-462.1" font-family="Arial" font-size="19.00" fill="#f0f9ff">Forwarded Messages Store</text>
<text text-anchor="start" x="94.93" y="-440.7" font-family="Arial" font-size="13.00" fill="#b6ecf7">JSON file with message_id, timestamp,</text>
<text text-anchor="start" x="84.2" y="-419.3" font-family="Arial" font-size="15.00" fill="#b6ecf7">forwarded_messages.json &#45; tracks all</text>
<text text-anchor="start" x="72.95" y="-401.3" font-family="Arial" font-size="15.00" fill="#b6ecf7">forwarded message IDs with timestamps</text>
</g>
<!-- botstate -->
<g id="node2" class="node">
<title>botstate</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="804.06,-528 477.94,-528 477.94,-348 804.06,-348 804.06,-528"/>
<text text-anchor="start" x="576.57" y="-462.1" font-family="Arial" font-size="19.00" fill="#f0f9ff">Bot State Store</text>
<text text-anchor="start" x="544.91" y="-440.7" font-family="Arial" font-size="13.00" fill="#b6ecf7">JSON file with counters, last_run,</text>
<text text-anchor="start" x="498" y="-419.3" font-family="Arial" font-size="15.00" fill="#b6ecf7">bot_state.json &#45; maintains operational state</text>
<text text-anchor="start" x="597.65" y="-401.3" font-family="Arial" font-size="15.00" fill="#b6ecf7">and statistics</text>
</g>
<!-- configcache -->
<g id="node3" class="node">
<title>configcache</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="373.64,-228 48.36,-228 48.36,-48 373.64,-48 373.64,-228"/>
<text text-anchor="start" x="153.44" y="-153.1" font-family="Arial" font-size="19.00" fill="#f0f9ff">Config Cache</text>
<text text-anchor="start" x="114.54" y="-131.7" font-family="Arial" font-size="13.00" fill="#b6ecf7">In&#45;memory cache with file backup</text>
<text text-anchor="start" x="68.42" y="-110.3" font-family="Arial" font-size="15.00" fill="#b6ecf7">Cached configuration data for performance</text>
</g>
<!-- logs -->
<g id="node4" class="node">
<title>logs</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="804.02,-228 483.98,-228 483.98,-48 804.02,-48 804.02,-228"/>
<text text-anchor="start" x="605.45" y="-153.1" font-family="Arial" font-size="19.00" fill="#f0f9ff">Log Files</text>
<text text-anchor="start" x="547.54" y="-131.7" font-family="Arial" font-size="13.00" fill="#b6ecf7">Rotating log files with timestamps</text>
<text text-anchor="start" x="558.95" y="-110.3" font-family="Arial" font-size="15.00" fill="#b6ecf7">Application and error logs</text>
</g>
<!-- forwardedmessages&#45;&gt;configcache -->
<!-- botstate&#45;&gt;logs -->
</g>
</svg>
`;case"handlers":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="929pt" height="602pt"
 viewBox="0.00 0.00 929.12 602.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 587.05)">
<g id="clust1" class="cluster">
<title>cluster_handlers</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="61.02,-282.8 61.02,-564 891.02,-564 891.02,-282.8 61.02,-282.8"/>
<text text-anchor="start" x="69.02" y="-551.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">COMMAND HANDLERS</text>
</g>
<!-- commandshandler -->
<g id="node1" class="node">
<title>commandshandler</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="421.04,-502.8 101,-502.8 101,-322.8 421.04,-322.8 421.04,-502.8"/>
<text text-anchor="start" x="176.54" y="-427.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Commands Handler</text>
<text text-anchor="start" x="204.66" y="-406.5" font-family="Arial" font-size="13.00" fill="#bfdbfe">Commands module</text>
<text text-anchor="start" x="157.22" y="-385.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Command processing interface</text>
</g>
<!-- messagehandler -->
<g id="node2" class="node">
<title>messagehandler</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="851.04,-502.8 531,-502.8 531,-322.8 851.04,-322.8 851.04,-502.8"/>
<text text-anchor="start" x="616.56" y="-427.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Message Handler</text>
<text text-anchor="start" x="638.27" y="-406.5" font-family="Arial" font-size="13.00" fill="#bfdbfe">Messages module</text>
<text text-anchor="start" x="591.38" y="-385.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Message processing interface</text>
</g>
<!-- utilitieslayer -->
<g id="node3" class="node">
<title>utilitieslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text text-anchor="start" x="103" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Utilities Layer</text>
<text text-anchor="start" x="35.38" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Helper functions and common utilities</text>
</g>
<!-- serviceslayer -->
<g id="node4" class="node">
<title>serviceslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="800.04,-180 480,-180 480,0 800.04,0 800.04,-180"/>
<text text-anchor="start" x="577.19" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Services Layer</text>
<text text-anchor="start" x="544.98" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Core business logic services</text>
</g>
<!-- commandshandler&#45;&gt;utilitieslayer -->
<g id="edge1" class="edge">
<title>commandshandler&#45;&gt;utilitieslayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M171.5,-323.09C157.71,-304.55 145.52,-284.12 137.85,-262.8 129.61,-239.9 128.8,-214.3 131.54,-190.01"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="134.13,-190.47 132.52,-182.69 128.92,-189.77 134.13,-190.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="137.85,-240 137.85,-262.8 280.02,-262.8 280.02,-240 137.85,-240"/>
<text text-anchor="start" x="140.85" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Logs command errors</text>
</g>
<!-- commandshandler&#45;&gt;serviceslayer -->
<g id="edge2" class="edge">
<title>commandshandler&#45;&gt;serviceslayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M366.09,-322.87C416.2,-280.45 476.22,-229.65 527.28,-186.42"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="528.74,-188.63 532.76,-181.79 525.34,-184.63 528.74,-188.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="461.88,-240 461.88,-262.8 620.43,-262.8 620.43,-240 461.88,-240"/>
<text text-anchor="start" x="464.88" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Delegates to bot handler</text>
</g>
<!-- messagehandler&#45;&gt;serviceslayer -->
<g id="edge3" class="edge">
<title>messagehandler&#45;&gt;serviceslayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M676.88,-322.87C670.33,-281.67 662.53,-232.56 655.79,-190.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="658.39,-189.81 654.62,-182.82 653.2,-190.64 658.39,-189.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="667.05,-240 667.05,-262.8 694.04,-262.8 694.04,-240 667.05,-240"/>
<text text-anchor="start" x="670.05" y="-248.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
</g>
</svg>
`;case"mainApp":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="820pt" height="594pt"
 viewBox="0.00 0.00 820.12 594.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 579.05)">
<g id="clust1" class="cluster">
<title>cluster_mainapp</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="398.02,-290.8 398.02,-556 782.02,-556 782.02,-290.8 398.02,-290.8"/>
<text text-anchor="start" x="406.02" y="-543.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">MAIN APPLICATION</text>
</g>
<!-- mainmodule -->
<g id="node1" class="node">
<title>mainmodule</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-502.8 430,-502.8 430,-322.8 750.04,-322.8 750.04,-502.8"/>
<text text-anchor="start" x="556.76" y="-418.1" font-family="Arial" font-size="19.00" fill="#eff6ff">main.py</text>
<text text-anchor="start" x="516.22" y="-394.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Application entry point</text>
</g>
<!-- utilitieslayer -->
<g id="node2" class="node">
<title>utilitieslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text text-anchor="start" x="103" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Utilities Layer</text>
<text text-anchor="start" x="35.38" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Helper functions and common utilities</text>
</g>
<!-- botcore -->
<g id="node3" class="node">
<title>botcore</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-180 430,-180 430,0 750.04,0 750.04,-180"/>
<text text-anchor="start" x="552.53" y="-105.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Bot Core</text>
<text text-anchor="start" x="498.97" y="-83.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">Python, JobMonitoringBot class</text>
<text text-anchor="start" x="500.8" y="-62.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Main bot coordination logic</text>
</g>
<!-- mainmodule&#45;&gt;utilitieslayer -->
<g id="edge1" class="edge">
<title>mainmodule&#45;&gt;utilitieslayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M454.2,-322.95C425.85,-303.6 396.4,-282.89 369.45,-262.8 337.3,-238.83 303.33,-211.77 272.32,-186.33"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="274.3,-184.57 266.84,-181.83 270.96,-188.62 274.3,-184.57"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="369.45,-240 369.45,-262.8 563.02,-262.8 563.02,-240 369.45,-240"/>
<text text-anchor="start" x="372.45" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Configures application logging</text>
</g>
<!-- mainmodule&#45;&gt;botcore -->
<g id="edge2" class="edge">
<title>mainmodule&#45;&gt;botcore</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M590.02,-322.87C590.02,-281.67 590.02,-232.56 590.02,-190.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="592.65,-190.36 590.02,-182.86 587.4,-190.36 592.65,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="590.02,-240 590.02,-262.8 617.01,-262.8 617.01,-240 590.02,-240"/>
<text text-anchor="start" x="593.02" y="-248.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
</g>
</svg>
`;case"services":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1787pt" height="1510pt"
 viewBox="0.00 0.00 1787.14 1510.50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1495.45)">
<g id="clust1" class="cluster">
<title>cluster_services</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="108.02,-282.8 108.02,-1209.6 938.02,-1209.6 938.02,-282.8 108.02,-282.8"/>
<text text-anchor="start" x="116.02" y="-1196.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SERVICES</text>
</g>
<!-- bothandler -->
<g id="node1" class="node">
<title>bothandler</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="861.04,-1148.4 541,-1148.4 541,-968.4 861.04,-968.4 861.04,-1148.4"/>
<text text-anchor="start" x="650.85" y="-1073.5" font-family="Arial" font-size="19.00" fill="#f8fafc">Bot Handler</text>
<text text-anchor="start" x="651.89" y="-1052.1" font-family="Arial" font-size="13.00" fill="#c2f0c2">BotHandler class</text>
<text text-anchor="start" x="611.82" y="-1030.7" font-family="Arial" font-size="15.00" fill="#c2f0c2">User command processing</text>
</g>
<!-- telegramservice -->
<g id="node2" class="node">
<title>telegramservice</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="518.04,-825.6 198,-825.6 198,-645.6 518.04,-645.6 518.04,-825.6"/>
<text text-anchor="start" x="283.58" y="-750.7" font-family="Arial" font-size="19.00" fill="#f8fafc">Telegram Service</text>
<text text-anchor="start" x="265.18" y="-729.3" font-family="Arial" font-size="13.00" fill="#c2f0c2">Telethon TelegramService class</text>
<text text-anchor="start" x="250.05" y="-707.9" font-family="Arial" font-size="15.00" fill="#c2f0c2">Handles all Telegram operations</text>
</g>
<!-- messageprocessor -->
<g id="node3" class="node">
<title>messageprocessor</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="468.04,-502.8 148,-502.8 148,-322.8 468.04,-322.8 468.04,-502.8"/>
<text text-anchor="start" x="224.07" y="-427.9" font-family="Arial" font-size="19.00" fill="#f8fafc">Message Processor</text>
<text text-anchor="start" x="235.77" y="-406.5" font-family="Arial" font-size="13.00" fill="#c2f0c2">MessageProcessor class</text>
<text text-anchor="start" x="202.96" y="-385.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">Message filtering and validation</text>
</g>
<!-- persistentstorage -->
<g id="node4" class="node">
<title>persistentstorage</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="898.04,-502.8 578,-502.8 578,-322.8 898.04,-322.8 898.04,-502.8"/>
<text text-anchor="start" x="659.87" y="-427.9" font-family="Arial" font-size="19.00" fill="#f8fafc">Persistent Storage</text>
<text text-anchor="start" x="687.08" y="-406.5" font-family="Arial" font-size="13.00" fill="#c2f0c2">JSON file storage</text>
<text text-anchor="start" x="638.38" y="-385.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">Data persistence and retrieval</text>
</g>
<!-- applicationlayer -->
<g id="node5" class="node">
<title>applicationlayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1757.04,-1148.4 1437,-1148.4 1437,-968.4 1757.04,-968.4 1757.04,-1148.4"/>
<text text-anchor="start" x="1524.14" y="-1063.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Application Layer</text>
<text text-anchor="start" x="1483.62" y="-1040.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Entry point and orchestration logic</text>
</g>
<!-- handlerslayer -->
<g id="node6" class="node">
<title>handlerslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="612.04,-1480.4 292,-1480.4 292,-1300.4 612.04,-1300.4 612.04,-1480.4"/>
<text text-anchor="start" x="387.6" y="-1395.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Handlers Layer</text>
<text text-anchor="start" x="381.16" y="-1372.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">User interaction layer</text>
</g>
<!-- utilitieslayer -->
<g id="node7" class="node">
<title>utilitieslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1278.04,-180 958,-180 958,0 1278.04,0 1278.04,-180"/>
<text text-anchor="start" x="1061" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Utilities Layer</text>
<text text-anchor="start" x="993.38" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Helper functions and common utilities</text>
</g>
<!-- configurationlayer -->
<g id="node8" class="node">
<title>configurationlayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text text-anchor="start" x="77.11" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Configuration Layer</text>
<text text-anchor="start" x="29.11" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Settings and environment management</text>
</g>
<!-- bothandler&#45;&gt;telegramservice -->
<g id="edge4" class="edge">
<title>bothandler&#45;&gt;telegramservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M604.57,-968.54C583.22,-948.78 560.74,-927.91 539.86,-908.4 513.61,-883.87 485.34,-857.25 459.09,-832.46"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="461.2,-830.84 453.95,-827.6 457.6,-834.66 461.2,-830.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="539.86,-885.6 539.86,-908.4 710.02,-908.4 710.02,-885.6 539.86,-885.6"/>
<text text-anchor="start" x="542.86" y="-892.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">Retrieves current statistics</text>
</g>
<!-- bothandler&#45;&gt;persistentstorage -->
<g id="edge5" class="edge">
<title>bothandler&#45;&gt;persistentstorage</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M723.18,-968.45C727.22,-948.8 730.84,-927.99 733.02,-908.4 748.2,-771.98 746.37,-613.09 742.86,-512.98"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="745.49,-513 742.59,-505.6 740.24,-513.19 745.49,-513"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="745.29,-724.2 745.29,-747 772.29,-747 772.29,-724.2 745.29,-724.2"/>
<text text-anchor="start" x="748.29" y="-732.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- bothandler&#45;&gt;utilitieslayer -->
<g id="edge6" class="edge">
<title>bothandler&#45;&gt;utilitieslayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M835.86,-968.52C968.78,-871.97 1163.6,-704.27 1246.02,-502.8 1283.04,-412.3 1274.38,-376.38 1246.02,-282.8 1235.98,-249.67 1218.12,-217.04 1198.87,-188.35"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1201.25,-187.18 1194.84,-182.48 1196.92,-190.15 1201.25,-187.18"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1215,-562.8 1215,-585.6 1365.72,-585.6 1365.72,-562.8 1215,-562.8"/>
<text text-anchor="start" x="1218" y="-570" font-family="Arial" font-size="14.00" fill="#c6c6c6">Uses formatting utilities</text>
</g>
<!-- telegramservice&#45;&gt;messageprocessor -->
<g id="edge7" class="edge">
<title>telegramservice&#45;&gt;messageprocessor</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M344.16,-645.67C337.74,-604.47 330.08,-555.36 323.48,-512.97"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="326.08,-512.63 322.33,-505.62 320.89,-513.44 326.08,-512.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="334.52,-562.8 334.52,-585.6 361.51,-585.6 361.51,-562.8 334.52,-562.8"/>
<text text-anchor="start" x="337.52" y="-571" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- telegramservice&#45;&gt;persistentstorage -->
<g id="edge8" class="edge">
<title>telegramservice&#45;&gt;persistentstorage</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M463.37,-645.67C513.61,-603.25 573.79,-552.45 624.99,-509.22"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="626.45,-511.43 630.48,-504.58 623.06,-507.41 626.45,-511.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="559.41,-562.8 559.41,-585.6 586.41,-585.6 586.41,-562.8 559.41,-562.8"/>
<text text-anchor="start" x="562.41" y="-571" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- telegramservice&#45;&gt;utilitieslayer -->
<g id="edge10" class="edge">
<title>telegramservice&#45;&gt;utilitieslayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M517.85,-687.61C671.26,-639.88 888.84,-564.41 953.02,-502.8 1040.45,-418.88 1082.74,-282.54 1102.35,-189.93"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1104.9,-190.55 1103.85,-182.67 1099.76,-189.49 1104.9,-190.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1076.57,-401.4 1076.57,-424.2 1218.76,-424.2 1218.76,-401.4 1076.57,-401.4"/>
<text text-anchor="start" x="1079.57" y="-408.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Logs message events</text>
</g>
<!-- telegramservice&#45;&gt;configurationlayer -->
<g id="edge9" class="edge">
<title>telegramservice&#45;&gt;configurationlayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M198.17,-647.59C146.16,-610.4 94.53,-561.81 66.03,-502.8 17.41,-402.13 60.03,-275.33 102.46,-189.22"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="104.72,-190.56 105.74,-182.68 100.03,-188.21 104.72,-190.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="66.03,-401.4 66.03,-424.2 93.02,-424.2 93.02,-401.4 66.03,-401.4"/>
<text text-anchor="start" x="69.03" y="-409.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- messageprocessor&#45;&gt;configurationlayer -->
<g id="edge11" class="edge">
<title>messageprocessor&#45;&gt;configurationlayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M266.99,-322.87C247.86,-281.41 225.04,-231.94 205.4,-189.36"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="207.79,-188.29 202.27,-182.58 203.03,-190.49 207.79,-188.29"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="238.46,-240 238.46,-262.8 415.63,-262.8 415.63,-240 238.46,-240"/>
<text text-anchor="start" x="241.46" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Uses keyword filtering rules</text>
</g>
<!-- persistentstorage&#45;&gt;utilitieslayer -->
<g id="edge12" class="edge">
<title>persistentstorage&#45;&gt;utilitieslayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M803.47,-323.17C826.57,-294.89 853.85,-264.58 881.98,-240 903.86,-220.88 928.45,-202.53 953.27,-185.66"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="954.42,-188.05 959.18,-181.68 951.49,-183.69 954.42,-188.05"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="881.98,-240 881.98,-262.8 1035.02,-262.8 1035.02,-240 881.98,-240"/>
<text text-anchor="start" x="884.98" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Uses timestamp utilities</text>
</g>
<!-- applicationlayer&#45;&gt;telegramservice -->
<g id="edge1" class="edge">
<title>applicationlayer&#45;&gt;telegramservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1437.18,-1026.49C1239.12,-986.76 892.16,-912.44 601.02,-825.6 577.07,-818.46 552.06,-810.22 527.58,-801.7"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="528.67,-799.29 520.72,-799.29 526.93,-804.25 528.67,-799.29"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="899.32,-885.6 899.32,-908.4 926.31,-908.4 926.31,-885.6 899.32,-885.6"/>
<text text-anchor="start" x="902.32" y="-893.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- handlerslayer&#45;&gt;bothandler -->
<g id="edge2" class="edge">
<title>handlerslayer&#45;&gt;bothandler</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M519.07,-1300.53C552.71,-1255.96 593.5,-1201.9 627.93,-1156.26"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="629.82,-1158.12 632.24,-1150.56 625.63,-1154.96 629.82,-1158.12"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="576.52,-1217.6 576.52,-1240.4 735.07,-1240.4 735.07,-1217.6 576.52,-1217.6"/>
<text text-anchor="start" x="579.52" y="-1224.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">Delegates to bot handler</text>
</g>
<!-- handlerslayer&#45;&gt;telegramservice -->
<g id="edge3" class="edge">
<title>handlerslayer&#45;&gt;telegramservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M439.24,-1300.68C421.76,-1179.25 390.47,-961.98 372.26,-835.46"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="374.9,-835.43 371.24,-828.38 369.71,-836.18 374.9,-835.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="424.82,-1047 424.82,-1069.8 451.81,-1069.8 451.81,-1047 424.82,-1047"/>
<text text-anchor="start" x="427.82" y="-1055.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
</g>
</svg>
`;case"utilities":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1300pt" height="590pt"
 viewBox="0.00 0.00 1300.12 590.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 575.05)">
<g id="clust1" class="cluster">
<title>cluster_utilities</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="432.02,-8 432.02,-289.2 1262.02,-289.2 1262.02,-8 432.02,-8"/>
<text text-anchor="start" x="440.02" y="-276.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UTILITIES</text>
</g>
<!-- loggingmodule -->
<g id="node1" class="node">
<title>loggingmodule</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="792.04,-228 472,-228 472,-48 792.04,-48 792.04,-228"/>
<text text-anchor="start" x="598.21" y="-143.3" font-family="Arial" font-size="19.00" fill="#f0f9ff">Logging</text>
<text text-anchor="start" x="520.69" y="-120.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">Logging configuration and utilities</text>
</g>
<!-- helpersmodule -->
<g id="node2" class="node">
<title>helpersmodule</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1222.04,-228 902,-228 902,-48 1222.04,-48 1222.04,-228"/>
<text text-anchor="start" x="1029.28" y="-143.3" font-family="Arial" font-size="19.00" fill="#f0f9ff">Helpers</text>
<text text-anchor="start" x="980.32" y="-120.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">Common utility functions</text>
</g>
<!-- applicationlayer -->
<g id="node3" class="node">
<title>applicationlayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-560 0,-560 0,-380 320.04,-380 320.04,-560"/>
<text text-anchor="start" x="87.14" y="-475.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Application Layer</text>
<text text-anchor="start" x="46.62" y="-452.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Entry point and orchestration logic</text>
</g>
<!-- serviceslayer -->
<g id="node4" class="node">
<title>serviceslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1222.04,-560 902,-560 902,-380 1222.04,-380 1222.04,-560"/>
<text text-anchor="start" x="999.19" y="-475.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Services Layer</text>
<text text-anchor="start" x="966.98" y="-452.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Core business logic services</text>
</g>
<!-- handlerslayer -->
<g id="node5" class="node">
<title>handlerslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-560 430,-560 430,-380 750.04,-380 750.04,-560"/>
<text text-anchor="start" x="525.6" y="-475.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Handlers Layer</text>
<text text-anchor="start" x="519.16" y="-452.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">User interaction layer</text>
</g>
<!-- applicationlayer&#45;&gt;loggingmodule -->
<g id="edge1" class="edge">
<title>applicationlayer&#45;&gt;loggingmodule</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M246.21,-380.42C275.97,-352.14 310.42,-321.83 344.45,-297.2 381.25,-270.57 423.02,-245.18 463.09,-222.85"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="464.21,-225.23 469.5,-219.3 461.67,-220.63 464.21,-225.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="344.45,-297.2 344.45,-320 538.02,-320 538.02,-297.2 344.45,-297.2"/>
<text text-anchor="start" x="347.45" y="-304.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Configures application logging</text>
</g>
<!-- serviceslayer&#45;&gt;loggingmodule -->
<g id="edge2" class="edge">
<title>serviceslayer&#45;&gt;loggingmodule</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M946.22,-380.13C887.3,-334.91 815.65,-279.93 755.66,-233.89"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="757.6,-232.07 750.05,-229.58 754.4,-236.23 757.6,-232.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="859.91,-297.2 859.91,-320 1002.11,-320 1002.11,-297.2 859.91,-297.2"/>
<text text-anchor="start" x="862.91" y="-304.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Logs message events</text>
</g>
<!-- serviceslayer&#45;&gt;helpersmodule -->
<g id="edge3" class="edge">
<title>serviceslayer&#45;&gt;helpersmodule</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1062.02,-380.13C1062.02,-336.3 1062.02,-283.28 1062.02,-238.14"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1064.65,-238.27 1062.02,-230.77 1059.4,-238.27 1064.65,-238.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1062.02,-297.2 1062.02,-320 1089.01,-320 1089.01,-297.2 1062.02,-297.2"/>
<text text-anchor="start" x="1065.02" y="-305.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- handlerslayer&#45;&gt;loggingmodule -->
<g id="edge4" class="edge">
<title>handlerslayer&#45;&gt;loggingmodule</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M567.74,-380.37C563.9,-353.53 562.61,-324.06 567.85,-297.2 571.71,-277.42 578.05,-256.98 585.28,-237.63"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="587.68,-238.69 587.92,-230.75 582.78,-236.81 587.68,-238.69"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="567.85,-297.2 567.85,-320 710.02,-320 710.02,-297.2 567.85,-297.2"/>
<text text-anchor="start" x="570.85" y="-304.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Logs command errors</text>
</g>
</g>
</svg>
`;case"botHandler":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1210pt" height="857pt"
 viewBox="0.00 0.00 1210.14 856.90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 841.85)">
<g id="clust1" class="cluster">
<title>cluster_bothandler</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="398.02,-290.8 398.02,-556 782.02,-556 782.02,-290.8 398.02,-290.8"/>
<text text-anchor="start" x="406.02" y="-543.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BOT HANDLER</text>
</g>
<!-- bothandlerclass -->
<g id="node1" class="node">
<title>bothandlerclass</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="750.04,-502.8 430,-502.8 430,-322.8 750.04,-322.8 750.04,-502.8"/>
<text text-anchor="start" x="542.49" y="-418.1" font-family="Arial" font-size="19.00" fill="#f8fafc">BotHandler</text>
<text text-anchor="start" x="475.38" y="-394.9" font-family="Arial" font-size="15.00" fill="#c2f0c2">Command handler implementation</text>
</g>
<!-- handlerslayer -->
<g id="node2" class="node">
<title>handlerslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-826.8 430,-826.8 430,-646.8 750.04,-646.8 750.04,-826.8"/>
<text text-anchor="start" x="525.6" y="-742.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Handlers Layer</text>
<text text-anchor="start" x="519.16" y="-718.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">User interaction layer</text>
</g>
<!-- utilitieslayer -->
<g id="node3" class="node">
<title>utilitieslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text text-anchor="start" x="103" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Utilities Layer</text>
<text text-anchor="start" x="35.38" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Helper functions and common utilities</text>
</g>
<!-- telegramservice -->
<g id="node4" class="node">
<title>telegramservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-180 430,-180 430,0 750.04,0 750.04,-180"/>
<text text-anchor="start" x="515.58" y="-105.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Telegram Service</text>
<text text-anchor="start" x="497.18" y="-83.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">Telethon TelegramService class</text>
<text text-anchor="start" x="482.05" y="-62.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Handles all Telegram operations</text>
</g>
<!-- persistentstorage -->
<g id="node5" class="node">
<title>persistentstorage</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1180.04,-180 860,-180 860,0 1180.04,0 1180.04,-180"/>
<text text-anchor="start" x="941.87" y="-105.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Persistent Storage</text>
<text text-anchor="start" x="969.08" y="-83.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">JSON file storage</text>
<text text-anchor="start" x="920.38" y="-62.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Data persistence and retrieval</text>
</g>
<!-- bothandlerclass&#45;&gt;utilitieslayer -->
<g id="edge2" class="edge">
<title>bothandlerclass&#45;&gt;utilitieslayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M470.81,-322.87C413.72,-280.27 345.3,-229.23 287.21,-185.89"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="289.09,-184.02 281.51,-181.64 285.95,-188.23 289.09,-184.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="387.91,-240 387.91,-262.8 538.63,-262.8 538.63,-240 387.91,-240"/>
<text text-anchor="start" x="390.91" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Uses formatting utilities</text>
</g>
<!-- bothandlerclass&#45;&gt;telegramservice -->
<g id="edge3" class="edge">
<title>bothandlerclass&#45;&gt;telegramservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M590.02,-322.87C590.02,-281.67 590.02,-232.56 590.02,-190.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="592.65,-190.36 590.02,-182.86 587.4,-190.36 592.65,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="590.02,-240 590.02,-262.8 760.18,-262.8 760.18,-240 590.02,-240"/>
<text text-anchor="start" x="593.02" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Retrieves current statistics</text>
</g>
<!-- bothandlerclass&#45;&gt;persistentstorage -->
<g id="edge4" class="edge">
<title>bothandlerclass&#45;&gt;persistentstorage</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M709.23,-322.87C766.32,-280.27 834.74,-229.23 892.83,-185.89"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="894.09,-188.23 898.53,-181.64 890.95,-184.02 894.09,-188.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="817.91,-240 817.91,-262.8 844.91,-262.8 844.91,-240 817.91,-240"/>
<text text-anchor="start" x="820.91" y="-248.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- handlerslayer&#45;&gt;bothandlerclass -->
<g id="edge1" class="edge">
<title>handlerslayer&#45;&gt;bothandlerclass</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M590.02,-646.96C590.02,-605.43 590.02,-555.82 590.02,-513.06"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="592.65,-513.16 590.02,-505.66 587.4,-513.16 592.65,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="590.02,-564 590.02,-586.8 748.57,-586.8 748.57,-564 590.02,-564"/>
<text text-anchor="start" x="593.02" y="-571.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Delegates to bot handler</text>
</g>
</g>
</svg>
`;case"commandsHandler":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="780pt" height="594pt"
 viewBox="0.00 0.00 780.14 594.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 579.05)">
<g id="clust1" class="cluster">
<title>cluster_commandshandler</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="183.02,-290.8 183.02,-556 567.02,-556 567.02,-290.8 183.02,-290.8"/>
<text text-anchor="start" x="191.02" y="-543.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">COMMANDS HANDLER</text>
</g>
<!-- commandsmodule -->
<g id="node1" class="node">
<title>commandsmodule</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="535.04,-502.8 215,-502.8 215,-322.8 535.04,-322.8 535.04,-502.8"/>
<text text-anchor="start" x="315.89" y="-418.1" font-family="Arial" font-size="19.00" fill="#eff6ff">commands.py</text>
<text text-anchor="start" x="256.63" y="-394.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Command handler implementations</text>
</g>
<!-- serviceslayer -->
<g id="node2" class="node">
<title>serviceslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text text-anchor="start" x="97.19" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Services Layer</text>
<text text-anchor="start" x="64.98" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Core business logic services</text>
</g>
<!-- utilitieslayer -->
<g id="node3" class="node">
<title>utilitieslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-180 430,-180 430,0 750.04,0 750.04,-180"/>
<text text-anchor="start" x="533" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Utilities Layer</text>
<text text-anchor="start" x="465.38" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Helper functions and common utilities</text>
</g>
<!-- commandsmodule&#45;&gt;serviceslayer -->
<g id="edge1" class="edge">
<title>commandsmodule&#45;&gt;serviceslayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M315.42,-322.87C287.45,-281.14 254.06,-231.31 225.4,-188.56"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="227.59,-187.11 221.24,-182.34 223.23,-190.04 227.59,-187.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="273.97,-240 273.97,-262.8 432.52,-262.8 432.52,-240 273.97,-240"/>
<text text-anchor="start" x="276.97" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Delegates to bot handler</text>
</g>
<!-- commandsmodule&#45;&gt;utilitieslayer -->
<g id="edge2" class="edge">
<title>commandsmodule&#45;&gt;utilitieslayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M434.62,-322.87C462.59,-281.14 495.98,-231.31 524.64,-188.56"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="526.81,-190.04 528.8,-182.34 522.45,-187.11 526.81,-190.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="488.97,-240 488.97,-262.8 631.13,-262.8 631.13,-240 488.97,-240"/>
<text text-anchor="start" x="491.97" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Logs command errors</text>
</g>
</g>
</svg>
`;case"messageHandler":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="430pt" height="594pt"
 viewBox="0.00 0.00 430.10 594.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 579.05)">
<g id="clust1" class="cluster">
<title>cluster_messagehandler</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-290.8 8,-556 392,-556 392,-290.8 8,-290.8"/>
<text text-anchor="start" x="16" y="-543.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">MESSAGE HANDLER</text>
</g>
<!-- messagesmodule -->
<g id="node1" class="node">
<title>messagesmodule</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-502.8 39.98,-502.8 39.98,-322.8 360.02,-322.8 360.02,-502.8"/>
<text text-anchor="start" x="144.03" y="-418.1" font-family="Arial" font-size="19.00" fill="#eff6ff">messages.py</text>
<text text-anchor="start" x="74.52" y="-394.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Message processing implementations</text>
</g>
<!-- serviceslayer -->
<g id="node2" class="node">
<title>serviceslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-180 39.98,-180 39.98,0 360.02,0 360.02,-180"/>
<text text-anchor="start" x="137.17" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Services Layer</text>
<text text-anchor="start" x="104.96" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Core business logic services</text>
</g>
<!-- messagesmodule&#45;&gt;serviceslayer -->
<g id="edge1" class="edge">
<title>messagesmodule&#45;&gt;serviceslayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M200,-322.87C200,-281.67 200,-232.56 200,-190.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="202.63,-190.36 200,-182.86 197.38,-190.36 202.63,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="200,-240 200,-262.8 226.99,-262.8 226.99,-240 200,-240"/>
<text text-anchor="start" x="203" y="-248.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
</g>
</svg>
`;case"messageProcessor":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="430pt" height="857pt"
 viewBox="0.00 0.00 430.10 856.90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 841.85)">
<g id="clust1" class="cluster">
<title>cluster_messageprocessor</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-290.8 8,-556 392,-556 392,-290.8 8,-290.8"/>
<text text-anchor="start" x="16" y="-543.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">MESSAGE PROCESSOR</text>
</g>
<!-- messageprocessorclass -->
<g id="node1" class="node">
<title>messageprocessorclass</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="360.02,-502.8 39.98,-502.8 39.98,-322.8 360.02,-322.8 360.02,-502.8"/>
<text text-anchor="start" x="118.69" y="-418.1" font-family="Arial" font-size="19.00" fill="#f8fafc">MessageProcessor</text>
<text text-anchor="start" x="137.47" y="-394.9" font-family="Arial" font-size="15.00" fill="#c2f0c2">Static filtering logic</text>
</g>
<!-- telegramservice -->
<g id="node2" class="node">
<title>telegramservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-826.8 39.98,-826.8 39.98,-646.8 360.02,-646.8 360.02,-826.8"/>
<text text-anchor="start" x="125.56" y="-751.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Telegram Service</text>
<text text-anchor="start" x="107.16" y="-730.5" font-family="Arial" font-size="13.00" fill="#bfdbfe">Telethon TelegramService class</text>
<text text-anchor="start" x="92.03" y="-709.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Handles all Telegram operations</text>
</g>
<!-- configurationlayer -->
<g id="node3" class="node">
<title>configurationlayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-180 39.98,-180 39.98,0 360.02,0 360.02,-180"/>
<text text-anchor="start" x="117.09" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Configuration Layer</text>
<text text-anchor="start" x="69.09" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Settings and environment management</text>
</g>
<!-- messageprocessorclass&#45;&gt;configurationlayer -->
<g id="edge2" class="edge">
<title>messageprocessorclass&#45;&gt;configurationlayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M200,-322.87C200,-281.67 200,-232.56 200,-190.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="202.63,-190.36 200,-182.86 197.38,-190.36 202.63,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="200,-240 200,-262.8 377.17,-262.8 377.17,-240 200,-240"/>
<text text-anchor="start" x="203" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Uses keyword filtering rules</text>
</g>
<!-- telegramservice&#45;&gt;messageprocessorclass -->
<g id="edge1" class="edge">
<title>telegramservice&#45;&gt;messageprocessorclass</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M200,-646.96C200,-605.43 200,-555.82 200,-513.06"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="202.63,-513.16 200,-505.66 197.38,-513.16 202.63,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="200,-564 200,-586.8 226.99,-586.8 226.99,-564 200,-564"/>
<text text-anchor="start" x="203" y="-572.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
</g>
</svg>
`;case"persistentStorage":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="780pt" height="857pt"
 viewBox="0.00 0.00 780.14 856.90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 841.85)">
<g id="clust1" class="cluster">
<title>cluster_persistentstorage</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="183.02,-290.8 183.02,-556 567.02,-556 567.02,-290.8 183.02,-290.8"/>
<text text-anchor="start" x="191.02" y="-543.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">PERSISTENT STORAGE</text>
</g>
<!-- persistentstorageclass -->
<g id="node1" class="node">
<title>persistentstorageclass</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="535.04,-502.8 215,-502.8 215,-322.8 535.04,-322.8 535.04,-502.8"/>
<text text-anchor="start" x="299.51" y="-418.1" font-family="Arial" font-size="19.00" fill="#f8fafc">PersistentStorage</text>
<text text-anchor="start" x="277.46" y="-394.9" font-family="Arial" font-size="15.00" fill="#c2f0c2">File&#45;based data management</text>
</g>
<!-- telegramservice -->
<g id="node2" class="node">
<title>telegramservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-826.8 0,-826.8 0,-646.8 320.04,-646.8 320.04,-826.8"/>
<text text-anchor="start" x="85.58" y="-751.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Telegram Service</text>
<text text-anchor="start" x="67.18" y="-730.5" font-family="Arial" font-size="13.00" fill="#bfdbfe">Telethon TelegramService class</text>
<text text-anchor="start" x="52.05" y="-709.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Handles all Telegram operations</text>
</g>
<!-- bothandler -->
<g id="node3" class="node">
<title>bothandler</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-826.8 430,-826.8 430,-646.8 750.04,-646.8 750.04,-826.8"/>
<text text-anchor="start" x="539.85" y="-751.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Bot Handler</text>
<text text-anchor="start" x="540.89" y="-730.5" font-family="Arial" font-size="13.00" fill="#bfdbfe">BotHandler class</text>
<text text-anchor="start" x="500.82" y="-709.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">User command processing</text>
</g>
<!-- utilitieslayer -->
<g id="node4" class="node">
<title>utilitieslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="535.04,-180 215,-180 215,0 535.04,0 535.04,-180"/>
<text text-anchor="start" x="318" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Utilities Layer</text>
<text text-anchor="start" x="250.38" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Helper functions and common utilities</text>
</g>
<!-- persistentstorageclass&#45;&gt;utilitieslayer -->
<g id="edge3" class="edge">
<title>persistentstorageclass&#45;&gt;utilitieslayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M375.02,-322.87C375.02,-281.67 375.02,-232.56 375.02,-190.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="377.65,-190.36 375.02,-182.86 372.4,-190.36 377.65,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="375.02,-240 375.02,-262.8 528.06,-262.8 528.06,-240 375.02,-240"/>
<text text-anchor="start" x="378.02" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Uses timestamp utilities</text>
</g>
<!-- telegramservice&#45;&gt;persistentstorageclass -->
<g id="edge1" class="edge">
<title>telegramservice&#45;&gt;persistentstorageclass</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M219.34,-646.96C247.48,-604.81 281.17,-554.35 310.01,-511.16"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="312.05,-512.84 314.03,-505.15 307.68,-509.93 312.05,-512.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="273.97,-564 273.97,-586.8 300.96,-586.8 300.96,-564 273.97,-564"/>
<text text-anchor="start" x="276.97" y="-572.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- bothandler&#45;&gt;persistentstorageclass -->
<g id="edge2" class="edge">
<title>bothandler&#45;&gt;persistentstorageclass</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M530.7,-646.96C502.56,-604.81 468.87,-554.35 440.03,-511.16"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="442.36,-509.93 436.01,-505.15 437.99,-512.84 442.36,-509.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="488.97,-564 488.97,-586.8 515.96,-586.8 515.96,-564 488.97,-564"/>
<text text-anchor="start" x="491.97" y="-572.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
</g>
</svg>
`;case"telegramService":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1640pt" height="857pt"
 viewBox="0.00 0.00 1640.14 856.90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 841.85)">
<g id="clust1" class="cluster">
<title>cluster_telegramservice</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="828.02,-290.8 828.02,-556 1212.02,-556 1212.02,-290.8 828.02,-290.8"/>
<text text-anchor="start" x="836.02" y="-543.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">TELEGRAM SERVICE</text>
</g>
<!-- telegramserviceclass -->
<g id="node1" class="node">
<title>telegramserviceclass</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1180.04,-502.8 860,-502.8 860,-322.8 1180.04,-322.8 1180.04,-502.8"/>
<text text-anchor="start" x="948.22" y="-418.1" font-family="Arial" font-size="19.00" fill="#f8fafc">TelegramService</text>
<text text-anchor="start" x="958.75" y="-394.9" font-family="Arial" font-size="15.00" fill="#c2f0c2">Main service class</text>
</g>
<!-- applicationlayer -->
<g id="node2" class="node">
<title>applicationlayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-826.8 0,-826.8 0,-646.8 320.04,-646.8 320.04,-826.8"/>
<text text-anchor="start" x="87.14" y="-742.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Application Layer</text>
<text text-anchor="start" x="46.62" y="-718.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Entry point and orchestration logic</text>
</g>
<!-- handlerslayer -->
<g id="node3" class="node">
<title>handlerslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-826.8 430,-826.8 430,-646.8 750.04,-646.8 750.04,-826.8"/>
<text text-anchor="start" x="525.6" y="-742.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Handlers Layer</text>
<text text-anchor="start" x="519.16" y="-718.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">User interaction layer</text>
</g>
<!-- bothandler -->
<g id="node4" class="node">
<title>bothandler</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1180.04,-826.8 860,-826.8 860,-646.8 1180.04,-646.8 1180.04,-826.8"/>
<text text-anchor="start" x="969.85" y="-751.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Bot Handler</text>
<text text-anchor="start" x="970.89" y="-730.5" font-family="Arial" font-size="13.00" fill="#bfdbfe">BotHandler class</text>
<text text-anchor="start" x="930.82" y="-709.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">User command processing</text>
</g>
<!-- configurationlayer -->
<g id="node5" class="node">
<title>configurationlayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text text-anchor="start" x="77.11" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Configuration Layer</text>
<text text-anchor="start" x="29.11" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Settings and environment management</text>
</g>
<!-- utilitieslayer -->
<g id="node6" class="node">
<title>utilitieslayer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-180 430,-180 430,0 750.04,0 750.04,-180"/>
<text text-anchor="start" x="533" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Utilities Layer</text>
<text text-anchor="start" x="465.38" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Helper functions and common utilities</text>
</g>
<!-- messageprocessor -->
<g id="node7" class="node">
<title>messageprocessor</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1180.04,-180 860,-180 860,0 1180.04,0 1180.04,-180"/>
<text text-anchor="start" x="936.07" y="-105.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Message Processor</text>
<text text-anchor="start" x="947.77" y="-83.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">MessageProcessor class</text>
<text text-anchor="start" x="914.96" y="-62.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Message filtering and validation</text>
</g>
<!-- persistentstorage -->
<g id="node8" class="node">
<title>persistentstorage</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1610.04,-180 1290,-180 1290,0 1610.04,0 1610.04,-180"/>
<text text-anchor="start" x="1371.87" y="-105.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Persistent Storage</text>
<text text-anchor="start" x="1399.08" y="-83.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">JSON file storage</text>
<text text-anchor="start" x="1350.38" y="-62.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Data persistence and retrieval</text>
</g>
<!-- telegramserviceclass&#45;&gt;configurationlayer -->
<g id="edge4" class="edge">
<title>telegramserviceclass&#45;&gt;configurationlayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M860.2,-356.74C729.2,-311.03 539.29,-243.48 375.02,-180 360.2,-174.27 344.85,-168.2 329.5,-162.03"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="330.69,-159.68 322.75,-159.31 328.72,-164.55 330.69,-159.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="586.81,-240 586.81,-262.8 613.8,-262.8 613.8,-240 586.81,-240"/>
<text text-anchor="start" x="589.81" y="-248.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- telegramserviceclass&#45;&gt;utilitieslayer -->
<g id="edge5" class="edge">
<title>telegramserviceclass&#45;&gt;utilitieslayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M900.81,-322.87C843.72,-280.27 775.3,-229.23 717.21,-185.89"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="719.09,-184.02 711.51,-181.64 715.95,-188.23 719.09,-184.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="817.91,-240 817.91,-262.8 960.11,-262.8 960.11,-240 817.91,-240"/>
<text text-anchor="start" x="820.91" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Logs message events</text>
</g>
<!-- telegramserviceclass&#45;&gt;messageprocessor -->
<g id="edge6" class="edge">
<title>telegramserviceclass&#45;&gt;messageprocessor</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1020.02,-322.87C1020.02,-281.67 1020.02,-232.56 1020.02,-190.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1022.65,-190.36 1020.02,-182.86 1017.4,-190.36 1022.65,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1020.02,-240 1020.02,-262.8 1047.01,-262.8 1047.01,-240 1020.02,-240"/>
<text text-anchor="start" x="1023.02" y="-248.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- telegramserviceclass&#45;&gt;persistentstorage -->
<g id="edge7" class="edge">
<title>telegramserviceclass&#45;&gt;persistentstorage</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1139.23,-322.87C1196.32,-280.27 1264.74,-229.23 1322.83,-185.89"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1324.09,-188.23 1328.53,-181.64 1320.95,-184.02 1324.09,-188.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1247.91,-240 1247.91,-262.8 1274.91,-262.8 1274.91,-240 1247.91,-240"/>
<text text-anchor="start" x="1250.91" y="-248.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- applicationlayer&#45;&gt;telegramserviceclass -->
<g id="edge1" class="edge">
<title>applicationlayer&#45;&gt;telegramserviceclass</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M319.95,-668.65C338.47,-661.15 357.13,-653.73 375.02,-646.8 535.32,-584.7 719.98,-518.54 850.53,-472.64"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="851.16,-475.2 857.37,-470.24 849.42,-470.25 851.16,-475.2"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="586.84,-564 586.84,-586.8 613.83,-586.8 613.83,-564 586.84,-564"/>
<text text-anchor="start" x="589.84" y="-572.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- handlerslayer&#45;&gt;telegramserviceclass -->
<g id="edge2" class="edge">
<title>handlerslayer&#45;&gt;telegramserviceclass</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M708.66,-646.96C766,-604.02 834.86,-552.45 893.23,-508.74"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="894.54,-511.04 898.97,-504.44 891.4,-506.84 894.54,-511.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="817.91,-564 817.91,-586.8 844.91,-586.8 844.91,-564 817.91,-564"/>
<text text-anchor="start" x="820.91" y="-572.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- bothandler&#45;&gt;telegramserviceclass -->
<g id="edge3" class="edge">
<title>bothandler&#45;&gt;telegramserviceclass</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1020.02,-646.96C1020.02,-605.43 1020.02,-555.82 1020.02,-513.06"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1022.65,-513.16 1020.02,-505.66 1017.4,-513.16 1022.65,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1020.02,-564 1020.02,-586.8 1190.18,-586.8 1190.18,-564 1020.02,-564"/>
<text text-anchor="start" x="1023.02" y="-571.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Retrieves current statistics</text>
</g>
</g>
</svg>
`;case"navigation":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="30pt" height="30pt"
 viewBox="0.00 0.00 30.10 30.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 15.05)">
</g>
</svg>
`;default:throw new Error("Unknown viewId: "+e)}}export{t as dotSource,n as svgSource};
