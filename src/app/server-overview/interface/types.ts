export interface serverObj {
    status:boolean | false,
    ip:string | '',
    name:string | '',
    maxPlayer:number | '',
    onlinePlayer:number | '',
    version:string | ''
}

export interface panelButton {
    enable:boolean | false;
    text:string  | '',
    class:string | '',
    icon:string | '',
    function: () => void;
}