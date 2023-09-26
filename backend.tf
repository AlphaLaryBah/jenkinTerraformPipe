# terraform {
#   backend "s3" {
#     bucket         = "devops-directive-tf-life"
#     key            = "zict-backend"
#     region         = "us-east-1"
#     dynamodb_table = "terraform-state-life"
#     encrypt        =  true
#  }
# }