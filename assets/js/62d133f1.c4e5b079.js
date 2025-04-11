"use strict";(self.webpackChunkdhs_docs=self.webpackChunkdhs_docs||[]).push([[27],{5673:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"setups/aws","title":"AWS Integration","description":"---","source":"@site/docs/setups/aws.md","sourceDirName":"setups","slug":"/setups/aws","permalink":"/dhs-docs/docs/setups/aws","draft":false,"unlisted":false,"editUrl":"https://github.com/Prashu7487/DHS-Documentation/edit/main/docs/setups/aws.md","tags":[],"version":"current","lastUpdatedBy":"Prashu7487","lastUpdatedAt":1744379635000,"frontMatter":{},"sidebar":"docs","previous":{"title":"Apache Spark Setup","permalink":"/dhs-docs/docs/setups/spark"},"next":{"title":"config-files","permalink":"/dhs-docs/docs/setups/config-files"}}');var t=s(4848),r=s(8453);const i={},o="AWS Integration",c={},l=[{value:"\ud83d\udce5 Install AWS CLI",id:"-install-aws-cli",level:2},{value:"\ud83d\udd10 Set Credentials",id:"-set-credentials",level:2},{value:"\ud83d\udd17 Connect S3 with HDFS",id:"-connect-s3-with-hdfs",level:2},{value:"\ud83d\udce6 Required JARs (Version-Sensitive)",id:"-required-jars-version-sensitive",level:2},{value:"\u2705 Test S3 Connectivity",id:"-test-s3-connectivity",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"aws-integration",children:"AWS Integration"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"-install-aws-cli",children:"\ud83d\udce5 Install AWS CLI"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"\r\nunzip awscliv2.zip\r\nsudo ./aws/install\n'})}),"\n",(0,t.jsx)(n.h2,{id:"-set-credentials",children:"\ud83d\udd10 Set Credentials"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"aws configure\n"})}),"\n",(0,t.jsx)(n.p,{children:"Enter:"}),"\n",(0,t.jsx)(n.p,{children:"Access Key ID"}),"\n",(0,t.jsx)(n.p,{children:"Secret Key"}),"\n",(0,t.jsx)(n.p,{children:"Region (e.g., ap-south-1)"}),"\n",(0,t.jsx)(n.p,{children:"Output: json"}),"\n",(0,t.jsx)(n.h2,{id:"-connect-s3-with-hdfs",children:"\ud83d\udd17 Connect S3 with HDFS"}),"\n",(0,t.jsx)(n.p,{children:"update core-site.xml"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<configuration>\r\n  <property>\r\n    <name>fs.s3a.impl</name>\r\n    <value>org.apache.hadoop.fs.s3a.S3AFileSystem</value>\r\n  </property>\r\n  <property>\r\n    <name>fs.s3a.aws.credentials.provider</name>\r\n    <value>com.amazonaws.auth.DefaultAWSCredentialsProviderChain</value>\r\n  </property>\r\n  <property>\r\n    <name>fs.s3a.fast.upload</name>\r\n    <value>true</value>\r\n  </property>\r\n</configuration>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"-required-jars-version-sensitive",children:"\ud83d\udce6 Required JARs (Version-Sensitive)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Hadoop AWS JAR\r\nwget https://repo1.maven.org/maven2/org/apache/hadoop/hadoop-aws/3.4.1/hadoop-aws-3.4.1.jar -P $HADOOP_HOME/share/hadoop/common/lib/\r\n\r\n# AWS SDK Bundle\r\nwget https://repo1.maven.org/maven2/com/amazonaws/aws-java-sdk-bundle/1.11.1026/aws-java-sdk-bundle-1.11.1026.jar -P $HADOOP_HOME/share/hadoop/common/lib/\r\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"-test-s3-connectivity",children:"\u2705 Test S3 Connectivity"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"hadoop fs -ls s3a://your-bucket-name/\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var a=s(6540);const t={},r=a.createContext(t);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);