import {IContact} from "./contact.model";

export interface IPage {
  "content": IContact[],
  "pageable": {
    "sort": {
      "sorted": false,
      "unsorted": true,
      "empty": true
    },
    "pageNumber": 0,
    "pageSize": 10,
    "offset": 0,
    "paged": true,
    "unpaged": false
  },
  "totalPages": 0,
  "totalElements": 0,
  "last": true,
  "numberOfElements": 0,
  "size": 10,
  "number": 0,
  "first": true,
  "sort": {
    "sorted": false,
    "unsorted": true,
    "empty": true
  },
  "empty": true
}
