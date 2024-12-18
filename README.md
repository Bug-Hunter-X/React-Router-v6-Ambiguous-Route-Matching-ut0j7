# React Router v6 Ambiguous Route Matching Bug

This repository demonstrates a common issue encountered when using `react-router-dom` v6: ambiguous route definitions.  The bug arises when defining routes with overlapping paths, leading to unexpected routing behavior.  A request might match a more specific route before a less specific one, even if the less specific route seems like it should be the correct match.

The solution involves carefully ordering routes and potentially using more precise path matching techniques to ensure correct routing.
