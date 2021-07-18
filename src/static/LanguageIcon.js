import { FaAlignLeft } from "react-icons/fa";


import { 
    AiOutlineHtml5,
    AiFillDatabase
} from "react-icons/ai";


import { 
    DiWindows,
    DiCss3,
    DiFsharp,
    DiGo,
    DiLess,
    DiPhp,
} from "react-icons/di";

import { 
    SiC,
    SiCplusplus,
    SiCoffeescript,
    SiCsharp,
    SiDocker,
    SiJava,
    SiJavascript,
    SiKotlin,
    SiLua,
    SiMarkdown,
    SiPerl,
    SiPostgresql,
    SiPowershell,
    SiPython,
    SiR,
    SiRedis,
    SiRuby,
    SiRust,
    SiSwift,
    SiTypescript,
} from "react-icons/si";

import { 
    GrGraphQl,
    GrMysql
} from "react-icons/gr";

import { 
    VscJson,
} from "react-icons/vsc";

import { 
    BsTerminalFill,
} from "react-icons/bs";




const LANGUAGE_ICON_MAP = {
    'bat' : <DiWindows style={{color: '#61a5c1'}}/>,
    'c' : <SiC style={{color: '#61a5c1'}}/>,
    'cpp' : <SiCplusplus style={{color: '#6d94c7'}}/>,
    'css' : <DiCss3 style={{color: '#3570b0'}}/>,
    'coffeescript' : <SiCoffeescript style={{color: 'hsl(223, 28%, 53%)'}}/>,
    'csharp' : <SiCsharp style={{color: '#4a9738'}}/>,
    'dockerfile' : <SiDocker style={{color: '#4598c2'}}/>,
    'fsharp' : <DiFsharp style={{color: '#5ab0d0'}}/>,
    'go' : <DiGo/>,
    'graphql' : <GrGraphQl style={{color: '#c82a90'}}/>,
    'html' : <AiOutlineHtml5 style={{color: '#d86b3a'}}/>,
    'java' : <SiJava style={{color: '#d23c35'}}/>,
    'javascript' : <SiJavascript style={{color: '#e5d565'}}/>,
    'json' : <VscJson style={{color: '#e5d565'}}/>,
    'kotlin' : <SiKotlin style={{color: '#7c77d2'}}/>,
    'less' : <DiLess/>,
    'lua' : <SiLua style={{color: '	hsla(241, 80%, 65%, 0.8)'}}/>,
    'markdown' : <SiMarkdown/>,
    'mysql' : <GrMysql style={{color: 'hsl(204, 54%, 53%)'}}/>,
    'perl' : <SiPerl style={{color: 'hsl(208, 61%, 43%)'}}/>,
    'pgsql' : <SiPostgresql style={{color: '#3e6e89'}}/>,
    'php' : <DiPhp/>,
    'powershell' : <SiPowershell style={{color: '#3171b2'}}/>,
    'python' : <SiPython style={{color: '#efd162'}}/>,
    'r' : <SiR style={{color: '#61a5c1'}}/>,
    'redis' : <SiRedis style={{color: '#c03b2b'}}/>,
    'ruby' : <SiRuby style={{color: '#d53227'}}/>,
    'rust' : <SiRust/>,
    'shell' : <BsTerminalFill/>,
    'sql' : <AiFillDatabase style={{color: '#f25890'}}/>,
    'swift' : <SiSwift style={{color: '#efa251'}}/>,
    'typescript' : <SiTypescript style={{color: '#4572c0'}}/>,
}

export default function LanguageIcon(props) {
    const language = props.language ? props.language : "";
    if (language === "") {
        return <FaAlignLeft />;
    }

    if (LANGUAGE_ICON_MAP[language]) {
        return LANGUAGE_ICON_MAP[language];
    }

    return <FaAlignLeft />;

}