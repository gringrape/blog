---
slug: "/terraform"
date: "2024-01-01"
title: "Terraform 입문"
---
# 목표
- AWS EC2 배포.

# EC2 배포
## Terraform 설치
설치 manual - https://developer.hashicorp.com/terraform/install

```bash
brew tap hashicorp/tap
brew install hashicorp/tap/terraform
```

설치 검증.

```bash
terraform -help
```

<img width="689" alt="image" src="https://github.com/gringrape/blog/assets/53764714/e5200b08-4c7f-45ba-8491-195d7002c3fb">

### CLI command 자동완성
```bash
terraform -install-autocomplete
```

### AWS tutorials 
https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli

### VSCode Extension 
<img width="415" alt="image" src="https://github.com/gringrape/blog/assets/53764714/86148193-b09a-4377-b9db-95dae67c0b97">

## 예시 Terraform
Docker container 를 실행시켜보자. 

빈 폴더 생성.
```bash
mkdir example
```


`main.tf`:
```terraform
terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.1"
    }
  }
}

provider "docker" {}

resource "docker_image" "nginx" {
  name         = "nginx"
  keep_locally = false
}

resource "docker_container" "nginx" {
  image = docker_image.nginx.image_id
  name  = "tutorial"

  ports {
    internal = 80
    external = 8000
  }
}

```

```bash
terraform init
terraform apply
```

## AWS EC2 배포
### 계정
access key, secret key

`AWS IAM => Users => <user_name> => security credentials => access keys`

```bash
aws configure
```
