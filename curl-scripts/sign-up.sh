# #!/bin/bash
#
#
# curl "https://https://max-grocery-app-1.herokuapp.com/sign-up" \
#   --include \
#   --request POST \
#   --header "Content-Type: application/json" \
#   --data '{
#     "credentials": {
#       "email": "'"${EMAIL}"'",
#       "password": "'"${PASSWORD}"'",
#       "password_confirmation": "'"${PASSWORD}"'"
#     }
#   }'

echo

#!/bin/bash

API="http://localhost:4741"
# API="https://max-grocery-app-1.herokuapp.com/"
URL_PATH="/sign-up"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
