![photos](https://github.com/manidweep1306/BeingZero/blob/main/photos/Screenshot%202025-11-09%20162510.png)
```java
import java.util.*;
import java.io.*;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a =sc.nextInt();
        int b =sc.nextInt();
        if(a>0&&b>0)
            System.out.println("1");
        if(a<0&&b>0)
            System.out.println("2");
        if(a<0&&b<0)
            System.out.println("3");
        if(a>0&&b<0)
            System.out.println("4");
        
    }
}
```
