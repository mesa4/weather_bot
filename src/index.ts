console.log('API KEY: ', process.env.WEATHER_KEY);

interface ITestParams {
  test: string
}

function someTest(params: ITestParams): void {
  const { test } = params;
  console.log(params);
  console.log(test);
}

someTest({ test: 'test string' });
