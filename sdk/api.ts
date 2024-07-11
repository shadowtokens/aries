import {AriesServiceApi, Configuration} from "@/sdk/aries";

export const aries = new AriesServiceApi(new Configuration({
    basePath: 'http://192.168.1.10:6789'
}))