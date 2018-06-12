dateTime=`date +%Y-%m-%d_%H-%M-%S`

echo "Build started @ "$dateTime

# build client
(
  yarn
  yarn build

  rm -r -f ./build
)

# upload build via FTP
lftp -e "mirror -R $CI_PROJECT_DIR/dist ~/meikellp.de" -u $TARGET_USER,$TARGET_PASS $TARGET_HOST

echo "Build finished @ "`date +%Y-%m-%d_%H-%M-%S`