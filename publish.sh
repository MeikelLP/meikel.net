dateTime=`date +%Y-%m-%d_%H-%M-%S`
logFileName="publish-"$dateTime".log"

echo "Build started @ "$dateTime

# build client
(
  yarn >> $logFileName
  yarn build >> $logFileName

  rm -r -f ./build >> $logFileName
)

# upload build via FTP
ftp -invp $TARGET_HOST << END_SCRIPT
  user $TARGET_USER $TARGET_PASS

  lcd $CI_PROJECT_DIR/dist

  cd ~/meikellp.de

  mdelete css/*
  mdelete dist/*
  mdelete fonts/*
  mdelete js/*

  rmdir css
  rmdir dist
  rmdir fonts
  rmdir js
  
  mdelete *

  mkdir css
  mkdir fonts
  mkdir img
  mkdir js

  cd css
  lcd css
  mput *

  cd ../fonts
  lcd ../fonts
  mput *

  cd ../img
  lcd ../img
  mput *

  cd ../js
  lcd ../js
  mput *

  cd ..
  mput *

  # End FTP Connection
  bye
END_SCRIPT



echo "Build finished @ "`date +%Y-%m-%d_%H-%M-%S`