import { Discussion, Comment } from '../types/discussion';

export const mockDiscussions: Discussion[] = [
  {
    id: 'discussion-1',
    problemId: 'problem-1',
    title: 'Connected Components Problem Discussion',
    description: 'Share your approaches and solutions for the Connected Components problem from Weekly DSA Challenge #32.',
    createdAt: 'January 15, 2025',
    author: 'admin',
    comments: [
      {
        id: 'comment-1',
        author: 'codingChampion',
        content: 'I solved this using a simple DFS approach. First, create an adjacency list representation of the graph, then run DFS from each unvisited node, incrementing a counter for each new connected component discovered. The time complexity is O(V+E) where V is the number of vertices and E is the number of edges.',
        timestamp: 'January 15, 2025, 9:30 PM',
        likes: 12,
        replies: [
          {
            id: 'reply-1',
            author: 'algorithmWizard',
            content: 'You can also solve this using Union-Find (Disjoint Set Union). It\'s a bit more elegant and can be more efficient for certain graph operations.',
            timestamp: 'January 15, 2025, 10:15 PM'
          },
          {
            id: 'reply-2',
            author: 'codeNinja',
            content: 'I agree with the DFS approach. It\'s straightforward and efficient for this problem. Here\'s my Python implementation: \n```python\ndef countComponents(n, edges):\n    graph = [[] for _ in range(n)]\n    for u, v in edges:\n        graph[u].append(v)\n        graph[v].append(u)\n    \n    visited = [False] * n\n    count = 0\n    \n    def dfs(node):\n        visited[node] = True\n        for neighbor in graph[node]:\n            if not visited[neighbor]:\n                dfs(neighbor)\n    \n    for i in range(n):\n        if not visited[i]:\n            count += 1\n            dfs(i)\n    \n    return count\n```',
            timestamp: 'January 16, 2025, 8:45 AM'
          }
        ]
      },
      {
        id: 'comment-2',
        author: 'matrixCoder',
        content: 'I initially tried using BFS instead of DFS for this problem. The approach is very similar - you still need to count the number of times you initiate a traversal from an unvisited node. My solution passed all test cases but I found the implementation a bit more verbose than DFS for this specific problem.',
        timestamp: 'January 16, 2025, 11:20 AM',
        likes: 8,
        replies: []
      },
      {
        id: 'comment-3',
        author: 'debugMaster',
        content: 'Anyone else notice the tricky edge case with isolated nodes? They count as their own connected component, which I initially overlooked. Make sure your solution correctly handles graphs with nodes that have no edges!',
        timestamp: 'January 16, 2025, 2:45 PM',
        likes: 15,
        replies: [
          {
            id: 'reply-3',
            author: 'byteDancer',
            content: 'Good point! I missed that in my first submission too. Isolated nodes are indeed their own connected components.',
            timestamp: 'January 16, 2025, 3:30 PM'
          }
        ]
      }
    ]
  },
  {
    id: 'discussion-2',
    problemId: 'problem-2',
    title: 'Maximum Subarray Sum Solutions',
    description: 'Discussion thread for the Maximum Subarray Sum problem. Share your approaches, optimizations, and any interesting observations about this classic DP problem.',
    createdAt: 'January 16, 2025',
    author: 'admin',
    comments: [
      {
        id: 'comment-4',
        author: 'algorithmAce',
        content: 'Kadane\'s algorithm is the way to go for this problem. It\'s a classic dynamic programming solution with O(n) time complexity and O(1) space complexity. The key insight is maintaining two variables: current_max and global_max. As you iterate through the array, you decide whether to extend the current subarray or start a new one.',
        timestamp: 'January 16, 2025, 10:05 AM',
        likes: 18,
        replies: []
      },
      {
        id: 'comment-5',
        author: 'recursionRookie',
        content: 'I tried solving this with a divide-and-conquer approach similar to merge sort. The maximum subarray can either be: 1) Entirely in the left half, 2) Entirely in the right half, or 3) Crossing the middle. It works but has O(n log n) time complexity, which is worse than Kadane\'s O(n) solution.',
        timestamp: 'January 16, 2025, 1:30 PM',
        likes: 7,
        replies: [
          {
            id: 'reply-4',
            author: 'codingChampion',
            content: 'That\'s a really interesting approach! It\'s a good exercise to implement both solutions and compare them. The divide-and-conquer method is particularly useful for understanding how to break down problems into subproblems.',
            timestamp: 'January 16, 2025, 2:10 PM'
          }
        ]
      },
      {
        id: 'comment-6',
        author: 'pythonPioneer',
        content: 'Here\'s a one-liner in Python using itertools.accumulate: \n```python\nfrom itertools import accumulate\ndef maxSubArray(nums):\n    return max(accumulate(nums, lambda x, y: max(y, x + y), initial=0))\n```\nThough it\'s concise, I think Kadane\'s algorithm is clearer for interviews and discussions.',
        timestamp: 'January 16, 2025, 4:45 PM',
        likes: 10,
        replies: []
      }
    ]
  }
];