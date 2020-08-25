"use strict";

function axiosOne() {
  return regeneratorRuntime.async(function axiosOne$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (resolve) {
            setTimeout(function () {
              resolve({
                data: 'test'
              });
            }, 500);
          }));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}

function data() {
  var codes;
  return regeneratorRuntime.async(function data$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(axiosOne());

        case 2:
          codes = _context2.sent;
          return _context2.abrupt("return", new Promise(function (resolve) {
            aa = codes.data;
            console.log(1);
            resolve(aa);
          }));

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function main() {
  var a;
  return regeneratorRuntime.async(function main$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(data());

        case 2:
          a = _context3.sent;
          console.log(a);
          console.log(2);
          console.log(3);

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
}

main();