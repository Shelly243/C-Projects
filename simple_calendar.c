#include <stdio.h>

// using Zeller's Congruence
int getDayOfWeek(int year, int month, int day)
{
    if (month < 3)
    {
        month += 12;
        year--;
    }
    int k = year % 100;
    int j = year / 100;
    int dayOfWeek = (day + 13 * (month + 1) / 5 + k + k / 4 + j / 4 - 2 * j) % 7;
    return (dayOfWeek + 5) % 7; // Convert to Sunday = 0, Monday = 1, ..., Saturday = 6
}

void printCalendar(int year, int month)
{
    int daysInMonth[] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    char *monthNames[] = {"", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"};

    // Leap year
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
    {
        daysInMonth[2] = 29;
    }

    int dayOfWeek = getDayOfWeek(year, month, 1);

    printf("%s %d\n", monthNames[month], year);
    printf("Su Mo Tu We Th Fr Sa\n");

    for (int i = 0; i < dayOfWeek; i++)
    {
        printf("   ");
    }

    for (int day = 1; day <= daysInMonth[month]; day++)
    {
        printf("%2d", day);
        dayOfWeek = (dayOfWeek + 1) % 7;
        if (dayOfWeek == 0)
        {
            printf("\n");
        }
        else
        {
            printf(" ");
        }
    }
    printf("\n");
}

int main()
{
    int year, month;

    printf("Enter year (e.g., 2023): ");
    scanf("%d", &year);

    printf("Enter month (1-12): ");
    scanf("%d", &month);

    if (month < 1 || month > 12)
    {
        printf("Invalid month. Please enter a month between 1 and 12.\n");
        return 1;
    }

    printCalendar(year, month);

    return 0;
}
