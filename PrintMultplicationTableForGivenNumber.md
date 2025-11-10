![photos](https://github.com/manidweep1306/BeingZero/blob/main/photos/Screenshot%202025-11-09%20162704.png)

```java
import java.util.*;
import java.io.*;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for(int i=0;i<n;i++){
            int num = sc.nextInt();
            for(int j=1;j<=10;j++){
                int c = num*j;
                System.out.println(num +" * "+ j +" = "+c);
            }
            System.out.println();
        }
    }
}
```
