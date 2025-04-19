"use strict";(self.webpackChunkdhs_docs=self.webpackChunkdhs_docs||[]).push([[268],{5244:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"troubleshooting/common-issues","title":"common-issues","description":"\ud83d\udc0d Python Environment Issues","source":"@site/docs/troubleshooting/common-issues.md","sourceDirName":"troubleshooting","slug":"/troubleshooting/common-issues","permalink":"/DHS-Documentation/docs/troubleshooting/common-issues","draft":false,"unlisted":false,"editUrl":"https://github.com/Prashu7487/DHS-Documentation/edit/main/docs/troubleshooting/common-issues.md","tags":[],"version":"current","lastUpdatedBy":"Prashu7487","lastUpdatedAt":1744569624000,"frontMatter":{},"sidebar":"docs","previous":{"title":"Will update later","permalink":"/DHS-Documentation/docs/operations/service-management"}}');var r=n(4848),a=n(8453);const t={},o=void 0,l={},d=[{value:"\ud83d\udc0d Python Environment Issues",id:"-python-environment-issues",level:2},{value:"\ud83d\udc33 Docker Issues",id:"-docker-issues",level:2},{value:"\ud83d\udd04 Service Management",id:"-service-management",level:2},{value:"\ud83d\udce6 Dependency Issues",id:"-dependency-issues",level:2},{value:"\ud83d\udd0d Debugging",id:"-debugging",level:2},{value:"\ud83d\udcca Monitoring",id:"-monitoring",level:2},{value:"\ud83d\udcc2 File Permissions",id:"-file-permissions",level:2},{value:"\ud83d\udce1 Network Issues",id:"-network-issues",level:2},{value:"\ud83d\udcdc Configuration Issues",id:"-configuration-issues",level:2},{value:"\ud83d\udce6 Package Issues",id:"-package-issues",level:2},{value:"\ud83d\udce6 Dependency Issues",id:"-dependency-issues-1",level:2},{value:"\ud83d\udce6 Version Compatibility",id:"-version-compatibility",level:2},{value:"\ud83d\udd04 Restart Services",id:"-restart-services",level:2},{value:"\ud83d\udcdc Configuration Issues",id:"-configuration-issues-1",level:2},{value:"\ud83d\udce6 Package Issues",id:"-package-issues-1",level:2},{value:"\ud83d\udce6 Dependency Issues",id:"-dependency-issues-2",level:2},{value:"\ud83d\udce6 Version Compatibility",id:"-version-compatibility-1",level:2},{value:"\ud83d\udcbe WebHDFS Not Working?",id:"-webhdfs-not-working",level:2},{value:"\ud83d\udd0d Quick Cluster Check",id:"-quick-cluster-check",level:2},{value:"\ud83e\udde0 Note on SparkSessions",id:"-note-on-sparksessions",level:2},{value:"Related to Hadoop",id:"related-to-hadoop",level:2},{value:"NameNode Issues",id:"namenode-issues",level:2}];function c(e){const s={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-markdown",children:"# Troubleshooting Guide\r\n\r\nCommon issues and solutions during DHS Project development.\r\n\r\n---\r\n\r\n## \ud83d\udd0c Port Conflicts\r\n\r\n```bash\r\nlsof -i :8000\r\nkill -9 <PID>\r\n```\n"})}),"\n",(0,r.jsx)(s.h2,{id:"-python-environment-issues",children:"\ud83d\udc0d Python Environment Issues"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"pip install -r requirements.txt\n"})}),"\n",(0,r.jsx)(s.h2,{id:"-docker-issues",children:"\ud83d\udc33 Docker Issues"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"docker-compose up --build\r\ndocker-compose down\n"})}),"\n",(0,r.jsx)(s.h2,{id:"-service-management",children:"\ud83d\udd04 Service Management"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"./start-services.sh\r\n./stop-services.sh\r\n./restart-services.sh\n"})}),"\n",(0,r.jsx)(s.h2,{id:"-dependency-issues",children:"\ud83d\udce6 Dependency Issues"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"npm install\r\npip install -r requirements.txt\n"})}),"\n",(0,r.jsx)(s.h2,{id:"-debugging",children:"\ud83d\udd0d Debugging"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"npm run build\r\nnpm run start\n"})}),"\n",(0,r.jsx)(s.h2,{id:"-monitoring",children:"\ud83d\udcca Monitoring"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"./logs-services.sh\n"})}),"\n",(0,r.jsx)(s.h2,{id:"-file-permissions",children:"\ud83d\udcc2 File Permissions"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"chmod -R 755 /path/to/directory\r\nchown -R user:group /path/to/directory\n"})}),"\n",(0,r.jsx)(s.h2,{id:"-network-issues",children:"\ud83d\udce1 Network Issues"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"ping localhost\r\ncurl http://localhost:8000\n"})}),"\n",(0,r.jsx)(s.h2,{id:"-configuration-issues",children:"\ud83d\udcdc Configuration Issues"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"cat config.yaml\n"})}),"\n",(0,r.jsx)(s.h2,{id:"-package-issues",children:"\ud83d\udce6 Package Issues"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"pip install --upgrade package-name\r\nnpm update package-name\n"})}),"\n",(0,r.jsx)(s.h2,{id:"-dependency-issues-1",children:"\ud83d\udce6 Dependency Issues"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"npm install\r\npip install -r requirements.txt\n"})}),"\n",(0,r.jsx)(s.h2,{id:"-version-compatibility",children:"\ud83d\udce6 Version Compatibility"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"npm outdated\r\npip list --outdated\n"})}),"\n",(0,r.jsx)(s.h2,{id:"-restart-services",children:"\ud83d\udd04 Restart Services"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"./restart-services.sh\n"})}),"\n",(0,r.jsx)(s.h2,{id:"-configuration-issues-1",children:"\ud83d\udcdc Configuration Issues"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"cat config.yaml\n"})}),"\n",(0,r.jsx)(s.h2,{id:"-package-issues-1",children:"\ud83d\udce6 Package Issues"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"pip install --upgrade package-name\r\nnpm update package-name\n"})}),"\n",(0,r.jsx)(s.h2,{id:"-dependency-issues-2",children:"\ud83d\udce6 Dependency Issues"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"npm install\r\npip install -r requirements.txt\n"})}),"\n",(0,r.jsx)(s.h2,{id:"-version-compatibility-1",children:"\ud83d\udce6 Version Compatibility"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"npm outdated\r\npip list --outdated\n"})}),"\n",(0,r.jsx)(s.h2,{id:"-webhdfs-not-working",children:"\ud83d\udcbe WebHDFS Not Working?"}),"\n",(0,r.jsx)(s.p,{children:"Ensure hdfs-site.xml contains:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-xml",children:"<property>\r\n  <name>dfs.webhdfs.enabled</name>\r\n  <value>true</value>\r\n</property>\n"})}),"\n",(0,r.jsx)(s.h2,{id:"-quick-cluster-check",children:"\ud83d\udd0d Quick Cluster Check"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"jps\n"})}),"\n",(0,r.jsx)(s.h2,{id:"-note-on-sparksessions",children:"\ud83e\udde0 Note on SparkSessions"}),"\n",(0,r.jsx)(s.p,{children:"Only one active SparkSession is allowed per JVM. Multiple sessions will conflict and break some parts of DHS."}),"\n",(0,r.jsx)(s.h2,{id:"related-to-hadoop",children:"Related to Hadoop"}),"\n",(0,r.jsx)(s.p,{children:"Error: Name node is in safe mode.\r\nSolution: Wait till services starts completely, Datanodes are still reporting their status to namenode, not completely\xa0started."}),"\n",(0,r.jsx)(s.h2,{id:"namenode-issues",children:"NameNode Issues"}),"\n",(0,r.jsx)(s.p,{children:"If the NameNode is not starting, format the NameNode. Ensure that the NameNode and DataNode directories exist; otherwise, a temporary directory will be created, and you will need to format after every restart."}),"\n",(0,r.jsx)(s.p,{children:"Permissions: The Hadoop user must have the necessary permissions to access the directories and connect Spark and all other components. (If only the user has permission to read/write, this can be a verification for the framework that no one else is reading data except the user.)"}),"\n",(0,r.jsx)(s.p,{children:"File Copying: When copying files to HDFS, ensure the exact path is specified. Otherwise, the file might be treated as a directory and may not be visible on the frontend."}),"\n",(0,r.jsx)(s.p,{children:"WARNING: Don't do any operation of hdfs file or dir other than from what framework internally does, this may result is meta data mismatch and cause error in future."})]})}function u(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>o});var i=n(6540);const r={},a=i.createContext(r);function t(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);