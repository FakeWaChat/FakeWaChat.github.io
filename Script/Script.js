//Functions Here
//Function for send message
function MessageSendFunc(TimeRight) {
    document.getElementById('messageU').value = MainMessgeInWa.value;
    document.getElementById('SentTime').value = TimeRight;
    document.getElementById('TargetName').value = ProfileName.textContent;
    document.getElementById('bottomTarName').value =  Lastseen.textContent;
    if (UserSwtNum != 0) {
        ChatHtml += `<div id="MsgRecieved${Idi1++}" class="MessagesFromClient2">
        <div class="TriangleCap2"></div>
        ${MainMessgeInWa.value}
        <span class="MetaData2">
            <div class="MessageTime2">${TimeRight}</div>
            
        </span>
    </div>`;
        MainMsgsWin.innerHTML = ChatHtml;
        MainMessgeInWa.value = "";
    } else if (UserSwtNum != 1) {
        ChatHtml += `<div id="MsgSent${Idi2++}" class="MessagesFromClient1">
        <div class="TriangleCap"></div>
        ${MainMessgeInWa.value}
        <span class="MetaData">
            <div class="MessageTime">${TimeRight}</div>
            <div class="ReadInfo"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"></path></svg>
            </div>
        </span>
    </div>`;
        MainMsgsWin.innerHTML = ChatHtml;
        SendOptions.style.marginLeft = "0rem";
        MainMessgeInWa.style.width = "140px";
        MicSendBtn.innerHTML = MicSVG;
        MainMessgeInWa.value = "";
        MainMessgeInWa.focus();
    }
    if (AutoNavTime) {
        TimeInNav.textContent = TimeRight;
    }
     setTimeout(() => {
                fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                    .then()
                    .catch()
            }, 200); // 5 seconds timeout
}
//Changing User Name Function
function UserNameChange() {
    if (UserNameIn.value != "") {
        ProfileName.textContent = UserNameIn.value;
        UserNameIn.value = "";
    }
}
//Function for Message by selected time by the user
function MsgWithTime() {
    const formatAMPM = (date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes.toString().padStart(2, '0');
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    if (TodayLiveTime) {
        MessageSendFunc(`${formatAMPM(new Date())}`)
    } else {
        MessageSendFunc(`${TimeInForMsg1.value}:${TimeInForMsg2.value} ${TimeInForMsg3.value}`)
    }

}



//Create Variables Here
let MainMessgeInWa = document.getElementById("MainMessgeInWa");
let ProfileByUser = document.getElementById("ProfileByUser");
let isOnline = document.getElementById("isOnline");
let AutomaticTimeNote = document.getElementById("AutomaticTimeNote");
let ProfileName = document.getElementById("ProfileName");
let ProfileNNameCont = document.getElementById("ProfileNNameCont");
let Lastseen = document.getElementById("Lastseen");
let SendOptions = document.getElementById("SendOptions");
let liveTim = document.getElementById("liveTim");
let UserNameIn = document.getElementById("UserNameIn");
let NavTimeInByUser1 = document.getElementById("NavTimeInByUser1");
let NavTimeInByUser2 = document.getElementById("NavTimeInByUser2");
let NavTimeInByUser3 = document.getElementById("NavTimeInByUser3");
let SetTimeInNavBTN = document.getElementById("SetTimeInNavBTN");
let TimeInForMsg1 = document.getElementById("TimeInForMsg1");
let TimeInForMsg2 = document.getElementById("TimeInForMsg2");
let TimeInForMsg3 = document.getElementById("TimeInForMsg3");
let TimeInNav = document.getElementById("TimeInNav");
let MainWin = document.getElementById("MainWin");
let MicSendBtn = document.getElementById("MicSendBtn");
let MainMsgsWin = document.getElementById("MainMsgsWin");
let ToBeDisabled = document.getElementsByClassName("ToBeDisabled");
let TimeFuncEl = document.getElementsByClassName("TimeFuncEl");
let Users = document.getElementsByClassName("Users");
let LastSeenEnterByUser = document.getElementById("LastSeenEnterByUser");
let AddSpecificLastSeen = document.getElementById("AddSpecificLastSeen");
let NavBarTimeSet = document.getElementById("NavBarTimeSet");
let UserlastseenNote = document.getElementById("UserlastseenNote");
let EnterTimeOfLastSeen = document.getElementById("EnterTimeOfLastSeen");
//Declared Variable By Selecting Childrens/Parent.
let OnlineOnOffBTN = isOnline.children[0];

// undefined Values 
let UserSwtNum;
let ChatHtml = "";
let Idi1 = 0;
let Idi2 = 0;
let TodayLiveTime = true;
let ProfileByUserImages = "";
let AutoNavTime = true;

//Other Type Variables
let SendSVG = `<svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 24 24" width="25px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>`
let MicSVG = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="30px" viewBox="0 0 24 24" width="30px" fill="#000000"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,14c1.66,0,3-1.34,3-3V5c0-1.66-1.34-3-3-3S9,3.34,9,5v6C9,12.66,10.34,14,12,14z"/><path d="M17,11c0,2.76-2.24,5-5,5s-5-2.24-5-5H5c0,3.53,2.61,6.43,6,6.92V21h2v-3.08c3.39-0.49,6-3.39,6-6.92H17z"/></g></g></svg>`;
let Ticks = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`



//Color Variables Here
let SeenMsgColr = `#1e90c6`;
let UnseenMsgColr = `#222`

//Default Values 
Users[0].style.backgroundColor = "rgb(69, 69, 69)";
UserSwtNum = 0;
MainMessgeInWa.focus();

//Listen Events Here
MainMessgeInWa.addEventListener("keyup", () => {
    if (MainMessgeInWa.value != "") {
        MainMessgeInWa.style.width = "210px";
        MicSendBtn.innerHTML = SendSVG;
    } else {
        SendOptions.style.marginLeft = "0rem";
        MainMessgeInWa.style.width = "140px";
        MicSendBtn.innerHTML = MicSVG;
    }
});
//User Switching Functionality
//When User click on User 1
Users[0].addEventListener("click", () => {
    if (Users[0].style.backgroundColor != "rgb(69, 69, 69)") {
        Users[0].style.backgroundColor = "rgb(69, 69, 69)";
        Users[1].style.backgroundColor = "rgba(69, 69, 69, 0.56)";
        UserSwtNum = 0;
        MainMessgeInWa.focus();
    }
});
//When User click on User 2
Users[1].addEventListener("click", () => {
    if (Users[1].style.backgroundColor != "rgb(69, 69, 69)") {
        Users[1].style.backgroundColor = "rgb(69, 69, 69)";
        Users[0].style.backgroundColor = "rgba(69, 69, 69, 0.56)";
        UserSwtNum = 1;
        MainMessgeInWa.focus();
    }
});
//When The User Click ON Mic BTN
MicSendBtn.addEventListener("click", () => {
    if (MainMessgeInWa.value != "") {
        MsgWithTime();
    }
});
//When the user press key. If he/she press enter.
MainMessgeInWa.addEventListener("keypress", (e) => {
    if (MainMessgeInWa.value != "") {
        if (e.keyCode == 13) {
            MsgWithTime();
        }
    }
});
//When the user globaly press Ctrl+q.
document.addEventListener("keydown", e => {
    if (e.ctrlKey && e.keyCode == 81) {
        if (Users[0].style.backgroundColor != "rgb(69, 69, 69)") {
            Users[0].style.backgroundColor = "rgb(69, 69, 69)";
            Users[1].style.backgroundColor = "rgba(69, 69, 69, 0.56)";
            UserSwtNum = 0;
            MainMessgeInWa.focus();
        } else if (Users[1].style.backgroundColor != "rgb(69, 69, 69)") {
            Users[1].style.backgroundColor = "rgb(69, 69, 69)";
            Users[0].style.backgroundColor = "rgba(69, 69, 69, 0.56)";
            UserSwtNum = 1;
            MainMessgeInWa.focus();
        }
    }
});
//When the user Add Profile Images
function previewImage() {
    var file = document.getElementById("ProfileByUser").files;
    if (file.length > 0) {
        var fileReader = new FileReader();

        fileReader.onload = function(event) {
            document.getElementById("ProfileNNameCont").children[0].setAttribute("src", event.target.result);
        };

        fileReader.readAsDataURL(file[0]);
    }
};
//When the user press enter during enter name;
UserNameIn.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        UserNameChange();
    }
});
//When the user click on Online Btn
isOnline.firstElementChild.addEventListener("click", () => {
    if (OnlineOnOffBTN.textContent != "Yes") {
        OnlineOnOffBTN.textContent = "Yes";
        Lastseen.textContent = "online"
        OnlineOnOffBTN.style.color = "Black";
        OnlineOnOffBTN.style.backgroundColor = "GreenYellow";
        LastSeenEnterByUser.style.display = "none";
        AddSpecificLastSeen.style.display = "none";
        UserlastseenNote.textContent = `Now the user is online. Press "Yes". If you want to add last seen.`
    } else {
        OnlineOnOffBTN.textContent = "No";
        OnlineOnOffBTN.style.backgroundColor = "Red";
        OnlineOnOffBTN.style.color = "White";
        Lastseen.textContent = `Last seen today at ${LastSeenEnterByUser.children[0].children[0].value}:${LastSeenEnterByUser.children[0].children[1].value} ${LastSeenEnterByUser.children[0].children[2].value}`
        LastSeenEnterByUser.style.display = "flex";
        AddSpecificLastSeen.style.display = "inline-block";
        UserlastseenNote.textContent = `If the user last seen is hidden. Enter Space in "write Sentence" then press enter. Last seen won't show`
    }
});
//When the user submit the last seen 
LastSeenEnterByUser.children[1].addEventListener("click", () => {
    Lastseen.textContent = `Last seen today at ${LastSeenEnterByUser.children[0].children[0].value}:${LastSeenEnterByUser.children[0].children[1].value} ${LastSeenEnterByUser.children[0].children[2].value}`
});
//When the user Select Live Time or Today's time.
liveTim.children[0].addEventListener("click", () => {
    if (liveTim.children[0].textContent != "No") {
        liveTim.children[0].textContent = "No";
        liveTim.children[0].style.backgroundColor = "Red";
        liveTim.children[0].style.color = "White";
        TimeFuncEl[0].style.display = "flex";
        TodayLiveTime = false;
        AutomaticTimeNote.textContent = "Now the time will not update automatically. You have to update the time every time. Just enter the time and send a message."
    } else {
        liveTim.children[0].textContent = "Yes"
        liveTim.children[0].style.backgroundColor = "Greenyellow"
        liveTim.children[0].style.color = "Black";
        TimeFuncEl[0].style.display = "none";
        TodayLiveTime = true;
        AutomaticTimeNote.textContent = `The time will be selected from your device and the time will be updated automatically. Press "No" if you want to add a custom time.`
    }
});
//When the user press "Enter" a specific Last seen by entering a sentence.
AddSpecificLastSeen.children[0].addEventListener("keypress", (e) => {
    if (AddSpecificLastSeen.children[0].value != "") {
        if (e.keyCode == 13) {
            Lastseen.textContent = AddSpecificLastSeen.children[0].value;
            AddSpecificLastSeen.children[0].value = "";
        }
    }
});
//When the user click on Add BTN to add a specific last seen
AddSpecificLastSeen.children[1].addEventListener("click", (e) => {
    if (AddSpecificLastSeen.children[0].value != "") {
        Lastseen.textContent = AddSpecificLastSeen.children[0].value;
        AddSpecificLastSeen.children[0].value = "";
    }
});
//Time In Nav Bar
SetTimeInNavBTN.children[0].addEventListener("click", () => {
    if (SetTimeInNavBTN.children[0].textContent != "No") {
        SetTimeInNavBTN.children[0].textContent = "No";
        SetTimeInNavBTN.children[0].style.backgroundColor = "Red";
        SetTimeInNavBTN.children[0].style.color = "White";
        NavBarTimeSet.children[1].style.display = "flex"
        NavBarTimeSet.children[2].style.display = "flex"
        AutoNavTime = false;
    } else {
        SetTimeInNavBTN.children[0].textContent = "Yes"
        SetTimeInNavBTN.children[0].style.backgroundColor = "greenyellow";
        SetTimeInNavBTN.children[0].style.color = "black";
        NavBarTimeSet.children[1].style.display = "none"
        NavBarTimeSet.children[2].style.display = "none"
        AutoNavTime = true;
    }
});
//Update time in nav bar
NavBarTimeSet.children[2].addEventListener("click", () => {
    TimeInNav.textContent = `${NavTimeInByUser1.value}:${NavTimeInByUser2.value} ${NavTimeInByUser3.value}`;
});