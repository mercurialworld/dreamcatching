import * as cdk from "aws-cdk-lib";
import { PochaMoeStack } from "./stack";

const app = new cdk.App();
new PochaMoeStack(app, "MafuyuStack", {
    env: { account: "575108959833", region: "us-east-1" },
});
