import * as request from "request";
import * as fs from "fs";


export const sleep = (ms: number): Promise<void> =>
  new Promise(
    (resolve): void => {
      setTimeout(resolve, ms);
    }
  );

export const notImplemented = (): never => {
  throw "Not implemented";
};

export const getGender = async (name: string) => {
  // in case of genderize.io being unreachable for more than 20s
  let timeout = setTimeout(() => {
    throw Error("Genderize.io timeout reached, 20s.")
  }, 20000);

  let result;
  try {
    const options = {
      url: `https://api.genderize.io/?name=${name}`,
      method: "GET",
      headers: {
        Accept: "application/json",
        "Accept-Charset": "utf-8"
      }
    };

    // send request to https://genderize.io/
    const genderize = () =>
      new Promise((resolve, reject) => {
        request(options, function (err, res, body) {
          if (err) reject(err);

          result = JSON.parse(body);
          resolve(result);
        });
      });

    const gender = await genderize().then(() => {
      console.log(`genderize.io: ${(result && result.gender) || "no result"}`);

      if (result && result.gender) return result.gender === "male" ? 2 : 1;

      //if gender is null, return male
      console.log(`genger is not clear \nreturn male`);
      return 2;
    });

    console.log(`gender ${gender}`);
    clearTimeout(timeout);
    return gender;

  } catch (e) {
    console.log(`${e},\nreturn male`)
    //in case something went wrong, return male
    return 2;
  }

}

export const random = (x: number, y: number | null = null): number => {
  if (x == null && y == null) {
    return Math.random();
  }

  if (y == null) {
    return Math.random() * x;
  }

  return x + Math.random() * (y - x);
};

export const stringify = (obj: any): string =>
  JSON.stringify(
    obj,
    (key, value): any => {
      if (key[0] == "$") {
        return undefined;
      }

      return value;
    },
    2
  );

export const requestURL = (url: String): Promise<void> =>
  new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
      if (response.statusCode === 200 && !error) {
        resolve(body)
      } else {
        reject(response.statusCode);
      };
    });
  });

export async function replaceAsync<T>(str, regex, asyncFn: (match: string, ...args) => Promise<T>) {
  const promises: Promise<T>[] = [];
  str.replace(regex, (match, ...args) => {
    const promise = asyncFn(match, ...args);
    promises.push(promise);
  });
  const data = await Promise.all(promises);
  return str.replace(regex, () => data.shift());
}

export function download(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('uri:', uri);
    console.log('filename:', filename);
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};