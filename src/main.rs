use std::time::{Duration, Instant};

fn main() {
    let mut a:i128 = 0;
    let start = Instant::now();
    for i in 1..=500000000 {
        a = a + i;
    }
    let duration: Duration = start.elapsed();

    println!("Time elapsed in expensive_function() is: {:?}", duration);

}
