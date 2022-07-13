#!/bin/bash

# remove previous file if exist
rm -f filenames.txt

# go to beats dir and write ls output into .txt file in parent dir
cd audio 
ls >> ../fns0.txt

# got to parent dir and put " at beginning and end of each line
cd ..

# add " from beginning of each line
#sed 's/^/"/' fns0.txt > fns1.txt

# add ", from each ende of line
#sed 's/$/.mp3",/' fns0.txt > fns1.txt

sed 's/.$//' fns0.txt > fns1.txt
sed 's/.$//' fns1.txt > fns2.txt
sed 's/.$//' fns2.txt > fns3.txt
sed 's/.$//' fns3.txt > filenames.txt

#sed '$ s/.$//' fns2.txt > fns3.txt
#shuf fns4.txt > filenames.txt

# delete temp files
rm -f fns0.txt
rm -f fns1.txt
rm -f fns2.txt
rm -f fns3.txt
#rm -f fns4.txt

#git actions
#git add .
#git commit -m "auto commit from script"
#git push -u origin main
