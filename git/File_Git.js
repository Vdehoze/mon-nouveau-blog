/*************************************************************************
*
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2016 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and may be covered by U.S. and Foreign Patents,
* patents in process, and are protected by trade secret or copyright law.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
*
**************************************************************************/
var addToGitignoreCmd = "dwgit.addToIgnore",
    removeFromGitignoreCmd = "dwgit.removeFromIgnore",
    stageCmd = "dwgit.stage",
    unstageCmd = "dwgit.unstage",
    stageAllCmd = "dwgit.stageAll",
    unstageAllCmd = "dwgit.unstageAll",
    diffCmd = "dwgit.diff",
    fileHistoryCmd = "dwgit.fileHistory",
    revertFileCmd = "dwgit.revertFile",
    commitCmd = "dwgit.commit";

var gitCommands = null;
var fileStatus = null;

var loadGitCommands = function () {
    gitCommands = [];
    gitCommands[0] = AddToGitignoreStr + ";id='" + addToGitignoreCmd + "'";
    gitCommands[1] = RemoveFromGitignoreStr + ";id='" + removeFromGitignoreCmd + "'";
    gitCommands[2] = StageStr + ";id='" + stageCmd + "'";
    gitCommands[3] = UnstageStr + ";id='" + unstageCmd + "'";
    gitCommands[4] = StageAllStr + ";id='" + stageAllCmd + "'";
    gitCommands[5] = UnstageAllStr + ";id='" + unstageAllCmd + "'";    
    gitCommands[6] = DiffStr + ";id='" + diffCmd + "'";
    gitCommands[7] = FileHistoryStr + ";id='" + fileHistoryCmd + "'";
    gitCommands[8] = RevertFileStr + ";id='" + revertFileCmd + "'";
    gitCommands[9] = CommitStr + ";id='" + commitCmd + "'";
};

function receiveArguments() {
    site.handleGitCommand(arguments[0]);
}
function canAcceptCommand() {
    var cmd = arguments[0];
    if (fileStatus == null) {
        fileStatus = site.getAvailableGitOptions();
    }  
    var i;
    for (i = 0; i < fileStatus.length; ++i) {
        if (fileStatus[i] == cmd) return true;
    }
    return false;    
}
function getDynamicContent(itemID) {  
    fileStatus = null;
    return gitCommands;
}
