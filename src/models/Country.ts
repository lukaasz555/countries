export default class Country {
	constructor(
		public name: {
			common: string;
			official: string;
			nativeName: {
				[key: string]: {
					official: string;
					common: string;
				};
			};
		},
		public tld: string,
		public cca2: string,
		public cca3: string,
		public currencies: {
			[key: string]: {
				name: string;
				symbol: string;
			};
		},
		public capital: string[],
		public region: string,
		public subregion: string,
		public languages: {
			[key: string]: string;
		},
		public borders: string[],
		public population: number,
		public flags: {
			png: string;
			svg: string;
		}
	) {}
}
