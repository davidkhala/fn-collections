FROM oraclelinux:8

RUN yum -y install oracle-release-el8
RUN groupadd --gid 1000 --system fn
RUN useradd --uid 1000 --system --gid fn fn
RUN dnf install -y @nodejs:14

WORKDIR /function
ADD package.json func.js func.yaml /function/
RUN npm install
ENTRYPOINT ["node", "func.js"]