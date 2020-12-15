/**
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

import { Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root"
})
export class AsgardioNavigatorService {

    private readonly router: Router;

    constructor(injector: Injector) {
        try {
            this.router = injector.get(Router);
        }
        catch {
            console.warn("Router is Not Provided");
        }
    }

    getUrl(): string {
        return this.router.url;
    }

    navigateByUrl(url: string): Promise<boolean> {
        if (this.router) {
            return this.router.navigateByUrl(url);
        }
    }
}