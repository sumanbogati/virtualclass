(function (window) {
    /**
     * {virtualclass1} {virtualclass2} are elements you passes with getString function eg:-
     *   virtualclass.lang.getString('operaBrowserIssue', ['opeara', 27]);
     *   opera and 27 will be replaced over the {virtualclass1} and {virtualclass2} resepectively for particular line of language file.
     * @type type
     */
    var message = {
        'ActiveAll': "Active all",
        'Addoption' : 'Add option',
        'addnew' : 'Add new',
        'adminusr' : 'Admin user',
        'appPrerequites':"Validate app prerequites",
        'assign': 'Assign',
        'assignDisable': "Reclaim controls",
        'askplayMessage': '<span id="askplaymsg"> Should we start playing the session?</span><br /><span id="remaingmsg">Remaining data will be downloaded in the background.</span>',
        'askplaymsg' : '<span id="askplaymsg"> "Downloading in progress, click Play to begin </span>"',
        'audioInput':"Audio input",
        'audiolatency' : 'Audio latency',
        'audioOutput':"Audio output",
        'audioOff': "Unmute",
        'audioOn': "Mute",
        'audioTest': "Your voice will be recorded and played back to you. \n Press Ok and speak something for few seconds.",
        'Back' : 'Back',
        'bandfast' : 'Bandwidth is high',
        'bandmedium' : 'Bandwidth is medium',
        'bandslow' : 'Bandwidth is low',
        'becomeTeacher' : 'Become teacher',
        'Binary_Limit_Exeed' : 'Warning: High BN usage',
        'bulkUserActions':"Bulk user actions",
        'ByInstructor' : 'By instructor',
        'ByTimer' : 'By timer',

        'cancel' : 'Cancel',
        'canvasDrawMsg': 'You can click on any tool for drawing' + 'click and hold the left mouse button to draw',
        //'canvasmissing' : 'Canvas is missing in your browsers. Please update the latest version of your browser',
        'canvasmissing' : 'Canvas is missing in your browsers. Please update your browser to the latest version',
        'chatEnable': "Disable chat",
        'Chatroom' : 'Chatroom',
        'ClearAll': "Clear all",
        'clicktoplay' : 'Play',
        'chatDisable' : "Enable chat",
        'chFireBrowsersIssue': 'Your browser {virtualclass1} {virtualclass2} needs updation, Congrea support Chrome 40+ and Firefox 35+.',
        'clearAllWarnMessage': 'Do you really want to clear this whiteboard?',
        'closedsDbheading' : "Close document dashboard",
        'closeSharePresentationdbHeading' : "Close presentation dashboard",
        'closevideoDashboard' : "Close video dashboard",
        'closeVoting':"Close voting",
        'cnmissing' : 'Chunk number is missing',
        'CodeEditor' : "Code editor",
        'cof': 'Connection off',
        'collaborate' : 'Collaborate',
        'commonChat': "Common chat",
        'commonBrowserIssue': 'Your browser {virtualclass1} {virtualclass2} is not supported, Congrea support Chrome and Firefox.',
        'congreainchrome' : "Your browser is compatible.",
        'confirmCancel' : 'No',
        'confirmOk' : 'Yes',
        'Controls' : 'Controls',
        'coursePoll' :"Created polls are of course level",
        'Cpoll' : 'Course poll',
        'Cquiz' : 'Close quiz',
        'createnewpoll' : 'Create new poll',
        'Creator' : 'Creator',
        'dap' : 'false',
        'delete' : 'Delete',
        'delblank' :'Remove the blank option',
        'Delete': "Delete",
        'DevicesNotFoundError' : 'Webcam is not available, or not connected properly.',
        'disable':"Disable",
        'disabled':"disabled",
        'disableAllVideo':"Disable all videos",
        'dltDisabled':'Can be deleted  by creator of the poll',
        'documentShare' : 'Share document',
        'DocumentSharing' : "Document sharing",
        'DocumentSharedbHeading' : 'Document dashboard',
        'docUploadSuccess':"Document upload success",
        'download' : 'Download',
        'downloadFile'  : 'Download file',
        'downloadsession' : 'Please wait while the recording is downloaded',
        'drawArea': 'Draw area',
        'duplicateUploadMsg' : 'This file is already exist, please upload new file.',
        'edit':'Edit',
        'editorCode': 'Code editor',
        'edittitle':"Edit title",
        'educator' : 'Educator',
        'EHTMLPresentUrl' : 'Enter HTML5 presentation url.',
        'enable':"Enable",
        'enablehistory' : '"Browser history" should be enabled during the session.',
        'enableVideoAll':"Enable video all",
        'etDisabledA':'Cannt edit,poll attempted',
        'etDisabledCr':'Can be edited by creator of the poll',
        'ETime' : 'Elapsed time',
        'FF2': "Fast forward 2",
        'FF8': "Fast forward 8",
        'filenotsave'  : 'Your file could not be saved.',
        'filetsaveTS'  : 'The session is ready to save.',
        'Finish': "Finish",
        'fitToScreen':"Fit to screen",
        'Freehand': "Free hand",
        'general':"General",
        'Greport' : 'Grade report',
        'highBandWidthSpeed' : 'Your bandwidth is good enough.',
        'httpsmissing' : 'Only secure orgins(https) are allowed for Screen sharing',
        'ieBrowserIssue': 'Internet Explorer is not supported, Congrea fully support Chrome  and Firefox.',
        'ios7support': "For Apple, Virtual Class supports iOS 8 and higher versions.",
        'iosAudEnable' : 'Tap here to enable the audio',
        'InternalError': "Please ensure that same webcam is not being used <br /> in multiple browsers or multiple applications. ",
        'invalidcmid' : 'Course module is invalid.',
        'invalidurl' :  'Your url is invalid',
        'indvprogress' : 'Current task',
        'JoinSession' : 'Join session',
        'keymissing' :  'Your software(LMS/CMS)\'s key is is missing',
        'Line': "Line",
        'lowBandWidthSpeed' : 'Your bandwidth is too low, we are stopping video playback. You will still be able to hear audio and view screen.',
        'maxCommonChat': "Show chat window",
        'Max_rooms' : 'Error: Max rooms limit reached',
        'Max_users' : 'Error: Max users limit reached',
        "media":"Media",
        'mediumBandWidthSpeed' : 'Your bandwidth is limited, we are reducing video quality based on your available bandwidth.',
        'minCommonChat': "Hide chat window",
        'minoption':'Enter atleast two options',
        'mictesting' : 'Above audio bar shall fluctuate while you speak if your microphone is connected properly.',
        'minute' : 'Minute',
        'ModeclosingPoll' : 'Mode of closing Poll :',
        'msgForDownloadStart' : 'Unable to save data. <br /> Preparing data for download',
        'msgForReload': "Please reload this page to continue editing.",
        'msgForWhiteboard' : 'Empty whiteboard.',
        'msgStudentForReload': "Please reload this page.",
        'Multiple_login' : 'Error: Access invalid, multiple logins',
        'muteAll' : 'Mute all',
        'muteAllAudio':"Mute all audio",
        'mybsharedoc' : 'Document will shared shortly',
        'NAME' : 'NAME',
        'Next' : 'Next',
        'nomdlroot' : 'There is no url for momodle root.',
        'noResultStd':"You are not permitted to see the result",
        'NotAllowedError':'Webcam is disabled',
        'NotFoundError' : 'Webcam is not available, or not connected properly.',
        'NotReadableError' : 'Please ensure that same webcam is not being used <br /> in multiple browsers or multiple applications.',
        'notSupportBrowser': "Firefox {virtualclass1} does not support Screen sharing.",
        'notsupportbrowser' : '{virtualclass1} is not fully compatible. For the best experience, use Google Chrome.',
        "NotSupportedError" : 'Only secure orgins(https) are allowed for audio and video.',
        'notSupportIphone': "Sorry. Virtual class doesn't support mobile phones.",
        'noPoll': "There is no question available for poll. Kindly click on ‘add new’ button to add question",
        'noPollNoAdmin':"There is no question available for site poll .Only admin can create site level poll",
        'noQuiz':"No quiz available. Congrea supports only mutliple choice questions",
        'Novote' : 'No vote received for this poll',
        'nowebcam' : 'Webcam is not available, or not connected properly.',
        'offcollaboration': "Collaboration off",
        'oncollaboration': "Collaboration on",
        'opendsDbheading' : "Document dashboard",
        'openSharePresentationdbHeading' : "Presentation dashboard",
        'openvideoDashboard' : "Video dashboard",
        'operaBrowserIssue': 'Your browser {virtualclass1} {virtualclass2} is partially supported. You will not be able to share your screen, Congrea fully support chrome and Firefox',
        'Options' : 'Options',
        'optselectd' : 'OPTION SELECTED',
        'Oval': "Oval",
        'overallprogress' : 'Overall progress',
        'Pause': "Pause",
        'pclosetag' : '<span>Are you sure you want to close this poll?  </span>',
        'pclose' : 'Are you sure you want to close voting?',
        'Pclosed' : 'Poll closed',
        'Pdsuccess' : 'Poll deleted successfully',
        'PEdit' : 'Poll edit',
        'PermissionDeniedError': "Webcam access has been denied.",
        'PERMISSION_DENIED': "You denied access to your Webcam(camera/microphone).",
        'Play': "Play",
        'playsessionmsg': 'Click ‘play’ to start the session.',
        'pleasewaitWhSynNewCont' : 'Please wait a while. Syncing new content.',
        'plswaitwhile': 'Please wait....',
        'poll':'Poll',
        'pollblank':'Question can not be left blank',
        'pollCancel':'Close',
        'pollDel':'Are you sure to delete this poll ?',
        'pollHead':'Vote this Poll',
        'pollmaybeshown':'Poll will be published',
        'pollmybpublish' : 'Poll will be published shortly',
        'pollresult' : "Previous result",
        'ppoll' : 'Publish Poll',
        'PQuestions' : 'Poll questions',
        'PQuiz' : 'Publish quiz',
        'Precheck':"Precheck",
        'precheckStart':'Start',
        'prechkcmplt' : 'Precheck complete',
        'Presult' : 'Poll result',
        'preWllBshortly' : 'Presentation will be shared shortly',
        'Prev' : 'Prev',
        'proposedspeed' : 'Proposed speed',
        'PSetting' : 'Poll setting',
        'Publish' : 'Publish',
        'QClosed' : 'Quiz closed',
        'Question' : 'Question',
        'Quiz' : 'Quiz',
        'Quiz/page' : 'Quiz/page',
        'Quizes' : 'Quizes',
        'quizmayshow' : 'Get ready for a quiz',
        'quizreviewpublish': 'Review & publish Quiz',
        'RaiseHandStdDisabled':'Undo raise hand',
        'RaiseHandEnable':'Hand raised',
        'raiseHandNotify':"Student(s) raised hand",
        'RaiseHandStdEnabled':'Raise hand',
        'readonlymode': 'Read only',
        'receivedVotes':"Received votes",
        'reclaim': 'Reclaim',
        'Rectangle': "Rectangle",
        'rejected' : 'Another application on your computer might be using your webcam. Kindly close all other applications that might be using your webcam.',
        'reload': "Reload",
        'reloadDoc':"Reload document",
        'replay' : 'Re-play',
        'Replay': "Replay from start.",
        'replay_message' : 'Thanks for watching.',
        'requestScreenShare':"Request screenShare",
        'Reset' : 'Reset',
        'Rtime' : 'Remaining time',
        'rusureCquiz' : '<span>Are your sure to close this quiz.  </span>',
        'rvtu' : 'Votes received/ total users',
        'safariBrowserIssue': 'Your browser Safari {virtualclass1} is not supported, We fully support Chrome  and Firefox',
        'Save' : 'Save',
        'savesession': 'Do you want to save current Session?',
        'savesessionTechSupport' : "Do you want to save current Session? <br /> Once you download the session, Updates won't be available on re-downloading of same session.",
        'screensharealready' : "The screen is being shared.",
        'ScreenShare' : "Screen share",
        'screensharemsg' : "The above screen is being shared.",
        'second' : 'Second',
        'selfview' : "Self view",
        'SetTimer' : 'Set timer',
        'sesseionkeymissing' : 'Session key is missing from Front End.', // from javascript
        'sentPackets': 'Sent <br/><span>Packets</span>',
        //'sessionend': "Close session.",
        'SessionEnd' : "Session end",
        'sessionendmsg' : 'Session has been closed. You may now close your browser.',
        'setting':"Setting",
        'share' : 'Share',
        'ShareVideo' : "Share video",
        'shareAnotherYouTubeVideo': 'Share another YouTube video',
        'SharePresentation' : "Share presentation",
        'SharePresentationdbHeading' : 'Presentation dashboard',
        'sharetoall' : "Share to all",
        'Showresulttostudents' : 'Show result to students',
        'sitePoll' :"Created polls are of site level",
        'Skip':"Close",
        'someproblem' : 'There\'s a problem uploading file.Pls try again',
        'SourceUnavailableError': 'Please ensure that same webcam is not being used in multiple browsers or multiple applications.',
        //'SourceUnavailableError' : 'Another application on your computer might be using your webcam. Kindly close all other applications that might be using your webcam.',
        'speakerTest' : 'If you can hear music, speakers are working.',
        'Spoll' : 'Site poll',
        'ssBtn':"Stop sharing",
        'ssStop':"Stop screen sharing",
        'startnewsession': "This session has not been saved, do you really want to end this session?",
        'status' : 'Status',
        'stdPublish' : 'stdPublish',
        'stdscreenshare' : 'Do you want to share your screen ?',
        'studentAudEnable' : 'Student audio enabled',
        'studentSafariBrowserIssue': 'Your browser {virtualclass1} {virtualclass2} cannot  share your webcam with other users, Congrea fully support Chrome  and Firefox.',
        'supportDesktop': "Virtual Class does not support tablets or mobiles. To present please use a desktop.",
        'supportDesktopOnly' : 'Sorry, presenter mode only supports desktops. Tablets and Mobile devices are not supported.',
        'teacherSafariBrowserIssue': 'Safari does not support presenter functionality. Please switch to Chrome or Firefox.',
        'techsupport' : "Tech support",
        'testingbrowser' : 'Testing browser compatibility',
        'testinginternetspeed' : 'Testing internet speed',
        'testingmichrophone' : 'Testing microphone',
        'testingspeaker' : 'Testing speaker',
        'testingwebcam' : 'Testing webcam connection',
        'Text': "Text",
        'Text_Limit_Exeed' : 'Warning: High TX usage',
        'TextEditor' : "Text editor",
        'Time' : 'Time',
        'Tmyclose' : 'Teacher may close this poll at any time',
        'total': 'Total',
        'totalprogress' : 'Total progress',
        'tpAudioTest' : 'Test audio',
        'transferControls':"Transfer controls",
        'Triangle': "Triangle",
        'Udocument' : 'Upload document',
        'Unauthenticated' : 'Error: Access invalid',
        'unmuteAll' : 'Unmute all',
        'uploadsession' : 'Please wait until processing is complete',
        'uploadvideo' : 'Upload video',
        'uploadedsession' : 'Your session has ended, you may now close the window.' +
        'Or close this popup to start a new session.',
        'usermissing' : 'User is missing',
        'userList':"User list",
        'validateurlmsg' : 'Invalid url',
        'VCE4' : 'Record data is missing',
        'VCE5' : 'There is unable to Record Data.',
        'VCE6' : 'Course module is missing.',
        'VideodbHeading' : 'Video dashboard',
        'videoInput':"Video input",
        'videooff' : "Video off",
        'videoquality' : 'Video quality',
        'VotedSoFar' : 'Votes received so far',
        'votesuccess' : 'Your vote has been submitted successfully',
        'votesuccessPbt':"Vote has been submitted successfully ,You are not permitted to see the result",
        'Vwllbshrshortly' : 'Video will be shared shortly',
        'waitmsgconnect' : 'Please wait a while. Application is trying to connect.',
        'watstdrespo' : 'Waiting for student response',
        'wbrtcMsgChrome': 'You can click the deny button for not sharing your microphone and camera  with Congrea.' +  'or click allow button to share them.',
        'wbrtcMsgFireFox': 'You can click on  "Share Selected Devices"' + ' to share your mic and camera feed with other users',
        'webcamerainfo' : 'If video is visible, webcam is working.',
        'Whiteboard' : "Whiteboard",
        'writemode': 'Write mode',
        'youtubeshare': 'YouTube video share',
        'youTubeUrl': 'Enter YouTube video URL.',
        'zoomIn':"Zoom in",
        'zoomOut':"Zoom out",
        /*For Chrome */
        'PermissionDeniedErrorExt' : '<div class="errorMsg"> Camera access has been blocked.To provide webcam access, kindly follow below procedure <br />'  +
        'Go to camera icon on top right of the screen <br /> ' +
        'Click on "Always allow..." option and select the camera option <br />  ' +
        'Click on done and refresh the screen  </div> <div class="screenImages">' +
        ' <figure class="chrome" > <img src="https://www.congrea.com/wp-content/uploads/2016/10/ff-video.png" > <figcaption>Chrome</figcaption> </figure></div>',

        'SecurityErrorExt' : '<div class="errorMsg"> Camera access has been blocked.To provide webcam access, kindly follow below procedure <br />'  +
        'Go to camera icon on top right of the screen <br /> ' +
        'Click on "Always allow..." option and select the camera option <br />  ' +
        'Click on done and refresh the screen  </div> <div class="screenImages">' +
        ' <figure class="chrome" > <img src="https://www.congrea.com/wp-content/uploads/2016/10/ff-video.png" > <figcaption>Chrome</figcaption> </figure></div>',

        'nopermissionExt' : '<div class="errorMsg"> Camera access has been blocked.To provide webcam access, kindly follow below procedure <br />'  +
        'Go to camera icon on top right of the screen <br /> ' +
        'Click on "Always allow..." option and select the camera option <br />  ' +
        'Click on done and refresh the screen  </div> <div class="screenImages">' +
        ' <figure class="chrome" > <img src="https://www.congrea.com/wp-content/uploads/2016/10/ff-video.png" > <figcaption>Chrome</figcaption> </figure></div>',

        'chromeExtMiss' : "Congrea needs 'Desktop Selector' plugin to share the Screen.<br />" +
        "You can download this from <a href='https://chrome.google.com/webstore/detail/desktop-selector/ijhofagnokdeoghaohcekchijfeffbjl' target='_blank'>HERE.</a>",


        /*For Firefox */
        'PermissionDeniedErrorExtFF' : '<div class="errorMsg"> Camera access has been blocked.To provide webcam access, kindly follow below procedure <br />'  +
        'Go to camera icon on top left of the screen <br /> ' +
        'Click on "Share Selected Device." option.' +
        '<div class="screenImages">' +
        '<figure class="firefox" > <img src="https://www.congrea.com/wp-content/uploads/2016/10/ff-screnshare.png" > <figcaption>Chrome</figcaption> </figure></div>',

        'SecurityErrorExtFF' : '<div class="errorMsg"> Camera access has been blocked.To provide webcam access, kindly follow below procedure <br />'  +
        'Go to camera icon on top left of the screen <br /> ' +
        'Click on "Share Selected Device." option.' +
        '<div class="screenImages">' +
        '<figure class="firefox" > <img src="https://www.congrea.com/wp-content/uploads/2016/10/ff-screnshare.png" > <figcaption>Chrome</figcaption> </figure></div>',

        'nopermissionExtFF' : '<div class="errorMsg"> Camera access has been blocked.To provide webcam access, kindly follow below procedure <br />'  +
        'Go to camera icon on top left of the screen <br /> ' +
        'Click on "Share Selected Device." option.' +
        '<div class="screenImages">' +
        '<figure class="firefox" > <img src="https://www.congrea.com/wp-content/uploads/2016/10/ff-screnshare.png" > <figcaption>Chrome</figcaption> </figure></div>',
    };
    window.message = message;
})(window);