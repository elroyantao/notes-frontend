const dev = {
  s3: {
    REGION: 'eu-west-1',
    BUCKET: 'notes-app-2-api-dev-attachmentsbucket-y58wpiz5k7n8'
  },
  apiGateway: {
    REGION: 'eu-west-1',
    URL: 'https://b0au2808x8.execute-api.eu-west-1.amazonaws.com/dev'
  },
  cognito: {
    REGION: 'eu-west-1',
    USER_POOL_ID: 'eu-west-1_XgwJE0d33',
    APP_CLIENT_ID: '2bh6nmd94ijkpii4dffg69vfo',
    IDENTITY_POOL_ID: 'eu-west-1:3696b8c4-bfef-4930-a529-8a0e16aeacb3'
  },
  STRIPE_KEY: 'pk_test_NcWE6gjLw62PCyQx4tzloKPx00HvS7fLVU'
}

const prod = {
  s3: {
    REGION: 'eu-west-1',
    BUCKET: 'notes-app-2-api-prod-attachmentsbucket-w5arm0fjoss8'
  },
  apiGateway: {
    REGION: 'eu-west-1',
    URL: 'https://c5rh6nh8xk.execute-api.eu-west-1.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'eu-west-1',
    USER_POOL_ID: 'eu-west-1_QAQhIGrOQ',
    APP_CLIENT_ID: '70l5i46up7oh0c31icgrqr7sgl',
    IDENTITY_POOL_ID: 'eu-west-1:73dba724-95e2-4788-b8c7-0d54aacc1051'
  },
  STRIPE_KEY: 'pk_test_NcWE6gjLw62PCyQx4tzloKPx00HvS7fLVU'
}

const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev

  export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  }
