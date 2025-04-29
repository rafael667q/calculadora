FROM ubuntu:22.04

RUN apt-get update && apt-get install -y octave

WORKDIR /octave

COPY trapecio.m .
COPY simpson.m .

CMD ["octave", "--interactive"]