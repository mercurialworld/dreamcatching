import * as cdk from "aws-cdk-lib";
import { DreamcatchingStack } from "./stack";

const app = new cdk.App();
new DreamcatchingStack(app, "DreamcatchingStack", {
    env: { account: "575108959833", region: "us-east-1" },
});
