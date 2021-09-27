use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);

    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn sieve(max_count: usize) -> Vec<usize> {
  let mut result: Vec<usize> = vec!{};
  let mut primes: Vec<bool> = Vec::with_capacity(max_count+1);

  for _ in 0..=max_count {
    primes.push(true);
  }
  for i in 2..=max_count {
    if !primes[i] {
      continue;
    }
    result.push(i);

    let mut j = i;
    while j <= max_count {
      primes[j] = false;
      j += i;
    }
  }
  return result;
}
