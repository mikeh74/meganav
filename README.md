# meganav

Examples of 'meganav' designs.

The flex example shows a design built using flex that collapses to text on mobile.
The problem being that we need to use a lot of nesting to achieve this.

index-grid.html example shows a similar concept just using CSS grids, it
requires a lot less CSS and would not require nesting items.

When we move it into a CMS we will need to calculate classes of the child
elements in the parent plugin.

The child plugin should only be rendered in the parent plugin. In the parent plugin 
controller we will need to count the number of elements and calculate the classes
for each.

If 1 or 2 then:

```
.grid-container-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
```

If 3 then:

```
.grid-container-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
```

If 4 or more:

```
.grid-container-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;

  .item--tall {
    grid-row: span 2;
  }
}

```

Where we have more than 4 items then we need to decide how many of those elements
should have a class of .item--tall added (this class decides if they should be
double height).

All items will be single height by default and we should add double height to items in
the list starting from the beginning:

4 items: d d d d
5 items: d d d s s
6 items: d d s s s s
7 items: d s s s s s s

Where d equals double height and s equals single height
