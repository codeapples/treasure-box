# C2 coding exam<br>sample solutions

Please note that code provided tends to be excessively thorough for input checking which is not required on the actual exam. But is mostly done for educational purposes.

Also code doesn't use any data structures other than arrays and doesn't use any inbuilt array methods for sorting or searching. This is done to show how to implement these algorithms yourself.

## Elves

At Christmas the boss of Elves registered how many gifts
were packed into rucksacks by each Elves. Write a program
that determines the followings:

1. How many rucksacks contain exactly 10 gifts?
2. Who packed the most gifts into rucksacks?
3. How many Elves and who (with index) packed more than K gifts into the rucksacks?
4. Did it happen, that an Elf packed less gifts into all the rucksacksthan someone else’s minimum gift number?

### Input

The first line of the standard input contains the number of Elves
(1≤N≤1000), and the given K number (1≤K≤2000). Afterward, there are N
lines, one line for each Elf. Each line contains the number of the
rucksacks (1≤R≤1000) that was packed by the given Elf, it is followed by R
integers those mean the number of gifts in the rucksacks (1≤G≤2000).

### Output

You have to write exactly 4 lines into the standard output. Each line
must contain an answer for the given question in the given order. First
line contains a number, the number of rucksacks that contains exactly 10
gifts. The second line contains the index of the Elf who packed the most
gift. The third line contains the number of the Elves and their indexes
separated by space. The last, fourth line contains YES or NO that answers
the fourth question.

### Value samples

**Input**<br>
3 30<br>
5 1 2 2 2 2<br>
3 14 10 16<br>
4 10 17 12 16<br>

**Output**<br>
2<br>
3<br>
2 2 3<br>
YES<br>

### Solution

```c#
namespace C2_sample1;
class Program {
  static void Main(string[] args) {
    // input start
    int elvesN = 0;
    int milestone = 0;

    string[]? input; // ? means that input can be NULL

    // check precondition & correct input
    // remember that it is checked sequentially
    // if something fails the rest is not checked
    while (
        (input = Console.ReadLine()?.Split(" ")) == null ||
        input.Length != 2 ||
        !int.TryParse(input[0], out elvesN) ||
        !int.TryParse(input[1], out milestone) ||
        elvesN < 1 || elvesN > 1000 ||
        milestone < 1 || milestone > 2000
    ) Console.Write("Invalid input. Try again: ");


    // we need to count those with 10 gifts
    int cnt = 0;
    // array to store how many rucksacks
    // each elf packed
    int[] rucksacks = new int[elvesN];
    // array to store sum of gifts each elf packed
    int[] gifts = new int[elvesN];
    // array to store min amount of gifts in a rucksack
    // for each elf
    int[] minGifts = new int[elvesN];
    // start parsing
    for (int i = 0; i < elvesN; i++) {
      // max number of gifts per rucksack is 2000
      int minVal = 2_001;

      // check precondition & correct input
      while (
        // we read something from keyboard
        (input = Console.ReadLine()?.Split(" ")) == null ||
        // we don't know the length yet, but need to check if [0] exists
        !(input.Length > 0) ||
        !int.TryParse(input[0], out rucksacks[i]) ||
        // now we know the correct length
        input.Length != 1 + rucksacks[i] ||
        // cheat and use lambdas here, but only for precondition checks
        // this takes rest of the array except input[0]
        // and checks if every element can be converted to int
        !input[1..(rucksacks[i] + 1)].All(x => int.TryParse(x, out _)) ||
        // lastly check that each gift number doesn't exceed precondition amount
        !input[1..(rucksacks[i] + 1)].All(x => int.Parse(x) >= 1 && int.Parse(x) <= 2000)
      ) Console.Write("Invalid input. Try again: ");

      // now we're sure data is correct, let's assign things
      int sum = 0;
      for (int j = 1; j <= rucksacks[i]; j++) {
        int giftsPerSack = int.Parse(input[j]);
        sum += giftsPerSack;

        // update minimum if needed
        if (giftsPerSack < minVal)
          minVal = giftsPerSack;

        // don't forget to count
        if (giftsPerSack == 10)
          cnt++;
      }

      // put data in arrays
      gifts[i] = sum;
      minGifts[i] = minVal;
    }
    // input end

    // task 1 - is done @ input, simple counting
    Console.WriteLine(cnt); // number of sacks with 10 gifts

    // task 2 - standard maximum selection
    int idx = 0;
    for (int i = 1; i < elvesN; i++) {
      if (gifts[i] > gifts[idx])
        idx = i;
    }

    Console.WriteLine(idx + 1); // elf who packed most gifts

    //task 3 - standard multiple item selection
    cnt = 0; // since we're done with cnt we can use it again
    string highElves = ""; // let's collect indexes straight into a string
    for (int i = 0; i < elvesN; i++) {
      if (gifts[i] > milestone) {
        // no space if it is the first entry
        highElves = highElves == "" ? $"{i + 1}" : $"{highElves} {i + 1}";
        cnt++;
      }
    }

    // add count to string
    highElves = $"{cnt} {highElves}";
    Console.WriteLine(highElves); // elves who packed more than K gifts

    // task 4
    // since we already know minimum gifts per sack per elf
    // this won't be too hard
    bool exists = false;
    // add bool check into for loop, so we break if it changes
    for (int i = 0; !exists && i < elvesN; i++) {
      for (int j = 0; !exists && j < elvesN; j++) {
        if (i == j) // we don't need to check same elf total to minimum
          continue;
        else if (gifts[i] < minGifts[j])
          exists = true;
      }
    }

    Console.WriteLine(exists ? "YES" : "NO");
  }
}
```

## Gladiators

Gladiators arrived at Capua to train and fight in the arena
in hope of one day fighting at the legendary Colosseum. We
have information on the name of the gladiator, the year they
arrived, if it was “before Christ” BC or “anno Domini” AD (in
the year of the Lord), how many battles they had, and how
many battles they won. Create a program that gives the:

1. the number of those gladiators who won more than W battles;
2. list the name of the gladiators who arrived to the city before Christ
   (BC) and taken part in more than 14 battles;
3. sum of the battles won by the top 3 gladiators; (who won the most
   battles)
4. name of the gladiator who has the best win rate; (winRate =
   wonBattles/allBattels);

### Input

The first line of the standard input contains the number of gladiators
(1≤N≤200) and the number of won battles(1≤W≤30). The next N line contains
the name of each gladiator (1≤Length(Gi))≤50), the time they
arrived(0≤Gi≤500), if they arrived “before Christ” BC or “anno Domini” AD
(in the year of the Lord), how many battles they had (0≤Gi≤100), and how
many battles they won (0≤Gi≤100).

### Output

1. The number of those gladiators who won more than W battles must be entered in the first line!
2. In the following lines list the name of the gladiators who arrived to the city before Christ (BC) and taken part in more than 14 battles! If there are no such gladiators print NONE instead!
3. In the first line, give the sum of the battles won by the best 3 gladiators!
4. In the first line, name of the gladiator with the best win rate; the win rate is calculated according to the following formula:
   $$ winRate = \frac{wonBattles}{totalBattles} $$

### Value samples

**Input**<br>
10;16<br>
Maximus;72;AD;12;10<br>
Spartacus;65;BC;18;16<br>
Aurelius;150;AD;8;8<br>
Valeria;85;BC;20;15<br>
Lucius;120;AD;14;11<br>
Octavius;100;BC;25;23<br>
Seraphina;190;AD;9;7<br>
Gaius;55;BC;30;26<br>
Livia;80;AD;16;12<br>
Titus;135;AD;22;20<br>

**Output**<br>
3<br>
Spartacus<br>
Valeria<br>
Octavius<br>
Gaius<br>
69<br>
Aurelius<br>

### Solution

```c#
namespace C2_sample2;
class Program {

  struct Gladiator {
    public string name;
    public int year;
    public string adbc;
    public int battles;
    public int wins;
    public double winrate;

    // to be able to create an instance of the struct
    // using new keyword we need to define a constructor
    public Gladiator(string name, int year, string adbc, int battles, int wins) {
      this.name = name;
      this.year = year;
      this.adbc = adbc;
      this.battles = battles;
      this.wins = wins;
      this.winrate = (double)wins / (double)battles;
    }
  }

  // simple descending bubble sort by wins function
  static void sortDescending(Gladiator[] glads) {
    for (int i = 0; i < glads.Length - 1; i++) {
      for (int j = 0; j < glads.Length - i - 1; j++) {
        if (glads[j].wins < glads[j + 1].wins) {
          // swap
          (glads[j], glads[j + 1]) = (glads[j + 1], glads[j]);
        }
      }
    }
  }

  static void Main(string[] args) {
    // input start
    int gladN = 0;
    int milestone = 0;

    // check preconditions
    string[]? input;
    while (
        (input = Console.ReadLine()?.Split(';')) == null ||
        input.Length != 2 ||
        !int.TryParse(input[0], out gladN) ||
        !int.TryParse(input[1], out milestone) ||
        gladN < 1 || gladN > 200 ||
        milestone < 1 || milestone > 30
    ) Console.Write("Invalid input, try again: ");

    Gladiator[] glads = new Gladiator[gladN];
    for (int i = 0; i < gladN; i++) {
      int year = 0;
      int battles = 0;
      int wins = 0;

      // check preconditions
      while (
          (input = Console.ReadLine()?.Split(';')) == null ||
          input.Length != 5 ||
          input[0].Length < 1 || input[0].Length > 50 ||
          !int.TryParse(input[1], out year) ||
          !(input[2] == "AD" || input[2] == "BC") ||
          !int.TryParse(input[3], out battles) ||
          !int.TryParse(input[4], out wins) ||
          year < 0 || year > 500 ||
          battles < 0 || battles > 100 ||
          wins < 0 || wins > battles
      ) Console.Write("Invalid input, try again: ");

      glads[i] = new Gladiator(input[0], year, input[2], battles, wins);
    }
    // input end

    // task 1 - counting
    int cnt = 0;
    for (int i = 0; i < gladN; i++)
      if (glads[i].wins > milestone) cnt++;

    // number of gladiators with at least W won battles
    Console.WriteLine(cnt);

    // task 2  - multiple item selection
    cnt = 0;
    Gladiator[] selected = new Gladiator[gladN];
    for (int i = 0; i < gladN; i++) {
      if (glads[i].adbc == "BC" && glads[i].battles > 14) {
        selected[cnt] = glads[i];
        cnt++;
      }
    }

    if (cnt == 0) {
      Console.WriteLine("NONE");
    }
    else {
      for (int i = 0; i < cnt; i++)
        // names of gladiators with BC and more than 14 battles
        Console.WriteLine(selected[i].name);
    }


    // task 3 -  sum of the battles won by the top 3 gladiators
    // best approach is to sort the array in descending order
    // and then sum the wins of the first 3 gladiators
    sortDescending(glads);
    // but we need to remember that now all indexes are changed
    // luckily it won't affect the rest of the assignment

    int sum = 0;
    for (int i = 0; i < 3; i++)
      sum += glads[i].wins;

    // sum of the battles won by the top 3 gladiators
    Console.WriteLine(sum);

    // task 4 - maximum selection by winrate
    int idx = 0;
    for (int i = 1; i < gladN; i++)
      if (glads[i].winrate > glads[idx].winrate) idx = i;

    // name of the gladiator with the highest winrate
    Console.WriteLine(glads[idx].name);
  }
}
```
