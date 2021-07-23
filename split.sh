
#!/bin/sh
cd `dirname $0`

rm -rf ./dst/*.jpg

node main.js ./iPhone-en.png 5
node main.js ./iPhone.png 5
node main.js ./iPhoneX-en.png 5
node main.js ./iPhoneX.png 5
node main.js ./iPad-en.png 2
node main.js ./iPad.png 2